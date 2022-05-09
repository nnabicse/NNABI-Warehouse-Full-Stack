import React from 'react';
import { Card } from 'react-bootstrap';
import './MyItem.css'

const MyItem = (props) => {
    const { _id, name, img, price, email, desc, quantity, supplier } = props.myItem;
    const { handleMyItemsDeleteButton } = props;
    return (
        <div className='my-items-card-container'>
            <Card className='my-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span>Item:</span> {name}</Card.Title>
                    <Card.Title> <span>Supplier:</span> {supplier}</Card.Title>
                    <Card.Title> <span>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span>Qty:</span> {quantity} Units</Card.Title>
                    <Card.Title> <span>PID:</span> {_id}</Card.Title>
                    <Card.Title> {email}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <button className='btn btn-primary fw-bold w-100' onClick={() => handleMyItemsDeleteButton(_id)}>Delete</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default MyItem;