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
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}: {quantity}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => handleHomeInventoryItemsManageButton(_id)}>Manage</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default HomeInventoryItem;