import React from 'react';
import { Card } from 'react-bootstrap';

const ManageInventory = (props) => {
    const { _id, name, price, desc, img, quantity, supplier } = props.item;
    const { handleDeleteButton } = props;
    // console.log(handleDeleteButton)

    return (
        <div className='manage-inventory-items-card-header'>
            <Card className='manage-inventory-items-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <span>Item:</span> {name}</Card.Title>
                    <Card.Title> <span>Supplier:</span> {supplier}</Card.Title>
                    <Card.Title> <span>Price:</span> {price} USD</Card.Title>
                    <Card.Title> <span>Quantity:</span> {quantity} Units</Card.Title>
                    <Card.Text> <span>Product ID:</span> {_id}</Card.Text>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Footer>
                        <button onClick={() => handleDeleteButton(_id)}>Delete</button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
        // <tr>
        //     <td>{name}</td>
        //     <td>{price}</td>
        //     <td>{desc}</td>
        //     <td>{quantity}</td>
        //     <td>{supplier}</td>
        //     <td><button onClick={() => handleDeleteButton(id)}>Delete</button></td>
        // </tr>
    );
};

export default ManageInventory;