import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItem = (props) => {
    const { _id, name, img, quantity, desc, price, supplier } = props.item
    const { handleItemDeleteButton } = props;
    const navigate = useNavigate();

    const handleUpdateButton = (id) => {
        navigate(`/inventory/${id}`)


    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Item: {name}</Card.Title>
                    <Card.Title>Supplier: {supplier}</Card.Title>
                    <Card.Title>Price: {price} USD</Card.Title>
                    <Card.Title>Qty: {quantity} Unit</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div>
                        <button onClick={() => handleItemDeleteButton(_id)}>Delete</button>
                    </div>
                    <div>
                        <button onClick={() => handleUpdateButton(_id)}>Update</button>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default ManageItem;