import { Col, Row } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux/es/exports";


const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);

    return (
        <Row>
            {items.map((item, index) => {
                return (
                    item && (
                        <Col md className="m-1" key={index}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                )
            })}
        </Row>
    )
}

export default DisplayList;