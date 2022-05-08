import React from 'react';
import { Card } from 'react-bootstrap';
import Loading from '../../Login/Loading/Loading';
import './HomeIncomingPurchase.css'

const HomeIncomingPurchase = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.purchase;
    return (
        <div className='home-incoming-card-container'>
            <Card className='home-incoming-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title>Supplier: {supplier}</Card.Title>
                    <Card.Title>Price: {price} USD</Card.Title>
                    <Card.Title>Qty: {quantity} Units</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeIncomingPurchase;