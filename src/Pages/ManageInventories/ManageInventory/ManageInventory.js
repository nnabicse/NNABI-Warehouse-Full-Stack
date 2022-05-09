import React from 'react';
import { Card } from 'react-bootstrap';
import './ManageInventory.css';

const ManageInventory = (props) => {
    const { _id, name, price, desc, img, quantity, supplier } = props.item;
    const { handleDeleteButton } = props;

    return (
        <div className='manage-inventory-items-card-container'>
            <Card className='manage-inventory-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span>Item:</span> {name}</Card.Title>
                    <Card.Title> <span>Supplier:</span> {supplier}</Card.Title>
                    <Card.Title> <span>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span>Qty:</span> {quantity} Units</Card.Title>
                    <Card.Text> <span>PID:</span> {_id}</Card.Text>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <button className='btn btn-primary w-100 fw-bold' onClick={() => handleDeleteButton(_id)}>Delete</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ManageInventory;