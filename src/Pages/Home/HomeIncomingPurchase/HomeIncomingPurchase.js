import React from 'react';
import { Card } from 'react-bootstrap';

const HomeIncomingPurchase = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.purchase;
    return (
        <div className='home-incoming-card-container'>
            <Card className='home-incoming-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeIncomingPurchase;