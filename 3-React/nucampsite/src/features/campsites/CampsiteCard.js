import React from 'react';
import { Link } from 'react-router-dom';
import { CardImg, Card, CardImgOverlay, CardTitle } from 'reactstrap';


const CampsiteCard = props => {
    const { id, image, name} = props.campsite;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay><CardTitle>{name}</CardTitle></CardImgOverlay>
            </Card>
        </Link>
    )
}

export default CampsiteCard