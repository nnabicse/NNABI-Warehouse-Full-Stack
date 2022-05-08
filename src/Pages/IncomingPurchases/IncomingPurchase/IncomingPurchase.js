import React from 'react';
import { Card } from 'react-bootstrap';
import './IncomingPurchase.css'

const IncomingPurchase = (props) => {
    const { _id, name, price, desc, img, quantity, supplier } = props.purchase;
    const { handleRecievePurchaseButton, handleRemoveforRecieve } = props
    console.log(props);
    return (
        <div className='incoming-purchase-items-card-header'>
            <Card className='incoming-purchase-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span>Item:</span> {name}</Card.Title>
                    <Card.Title> <span>Supplier:</span> {supplier}</Card.Title>
                    <Card.Title> <span>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span>Quantity:</span> {quantity} Units</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className='incoming-purchase-recieve-button' onClick={() => {
                        handleRecievePurchaseButton(_id);
                        handleRemoveforRecieve(_id);
                    }}
                    >Recieved</button>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default IncomingPurchase;