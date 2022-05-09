import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeOutgoingOrder.css'

const HomeOutgoingOrder = (props) => {
    const { name, price, img, quantity, client, desc } = props.order;
    return (
        <div className='home-outgoing-order-items-card-container'>
            <Card className='outgoing-order-home-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span className='heading'>Item:</span> {name}</Card.Title>
                    <Card.Title> <span className='heading'>Client:</span> {client}</Card.Title>
                    <Card.Title> <span className='heading'>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span className='heading'>Qty:</span> {quantity} Units</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeOutgoingOrder;