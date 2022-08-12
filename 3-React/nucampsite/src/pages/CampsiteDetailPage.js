import { useParams } from "react-router-dom"
import { Container, Row } from "reactstrap"
import { selectCampsiteById  as selectCampsiteByID } from "../features/campsites/campsitesSlice";
import CampsiteDetail from '../features/campsites/CampsiteDetail'
import CommentsList from '../features/comments/CommentsList';
import SubHeader from "../components/SubHeader";
import { useSelector } from "react-redux/es/exports";
import Error from '../components/Error';
import Loading from '../components/Loading';



const CampsiteDetailPage = () => {
    const {campsiteID} = useParams();
    const campsite = useSelector(selectCampsiteByID(campsiteID))

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteID={campsiteID} />
            </>
        );
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>
                {content}
            </Row>
        </Container>
    );
}

export default CampsiteDetailPage