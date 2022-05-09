import React from 'react';
import { Card } from 'react-bootstrap';
import './IncomingPurchase.css'

const IncomingPurchase = (props) => {
    const { _id, name, price, desc, img, quantity, supplier } = props.purchase;
    const { handleRecievePurchaseButton, handleRemoveforRecieve } = props
    return (
        <div className='incoming-purchase-items-card-container'>
            <Card className='incoming-purchase-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span>Item:</span> {name}</Card.Title>
                    <Card.Title> <span>Supplier:</span> {supplier}</Card.Title>
                    <Card.Title> <span>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span>Qty:</span> {quantity} Units</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <button className='btn btn-primary fw-bold w-100 incoming-purchase-recieve-button' onClick={() => {
                        handleRecievePurchaseButton(_id);
                        handleRemoveforRecieve(_id);
                    }}
                    >Recieve</button>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default IncomingPurchase;