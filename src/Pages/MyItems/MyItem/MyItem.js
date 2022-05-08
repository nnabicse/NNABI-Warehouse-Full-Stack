import React from 'react';
import { Card } from 'react-bootstrap';

const MyItem = (props) => {
    const { _id, name, img, price, email, desc, quantity, supplier } = props.myItem;
    const { handleMyItemsDeleteButton } = props;
    return (
        <div className='my-items-card-header'>
            <Card className='my-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span>Item:</span> {name}</Card.Title>
                    <Card.Title> <span>Supplier:</span> {supplier}</Card.Title>
                    <Card.Title> <span>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span>Quantity:</span> {quantity} Units</Card.Title>
                    <Card.Text> <span>Product ID:</span> {_id}</Card.Text>
                    <Card.Text> <span>Item Added By:</span> {email}</Card.Text>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Footer>
                        <button onClick={() => handleMyItemsDeleteButton(_id)}>Delete</button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyItem;