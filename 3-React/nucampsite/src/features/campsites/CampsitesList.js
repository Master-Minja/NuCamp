import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice' 
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CampsitesList = () => {

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    const campsites = useSelector(selectAllCampsites)

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList