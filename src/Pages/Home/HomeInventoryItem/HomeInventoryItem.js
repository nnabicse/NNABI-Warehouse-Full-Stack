import React from 'react';
import './HomeInventoryItem.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeInventoryItem = (props) => {
    const { _id, name, price, desc, img, quantity, supplier } = props.item;
    const navigate = useNavigate();
    const handleHomeInventoryItemsManageButton = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='home-inventory-item-card-container'>
            <Card className='home-inventory-item-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Item: {name}</Card.Title>
                    <Card.Title>Supplier: {supplier}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Qty: {quantity}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-white border-0'>
                    <button className='btn w-100 bg-primary text-white fw-bold' onClick={() => handleHomeInventoryItemsManageButton(_id)}>Manage</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default HomeInventoryItem;