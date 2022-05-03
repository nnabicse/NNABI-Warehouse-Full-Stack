import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const AddInventoryItem = () => {
    const nameRef = useRef()
    const priceRef = useRef()
    const qtyRef = useRef()
    const imageRef = useRef()
    const emailRef = useRef()
    const handleSubmitButton = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = qtyRef.current.value;
        const image = imageRef.current.value;
        const email = emailRef.current.value;

        const newItem = { name, price, quantity, image, email }
        console.log(newItem);
    }
    return (
        <div>
            <h2>Add New Item</h2>
            <Form onSubmit={handleSubmitButton}>
                <Form.Group className="mb-3" controlId="formBasicItemName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Item Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItemPrice">
                    <Form.Label>Item Price</Form.Label>
                    <Form.Control ref={priceRef} type="number" placeholder="Enter Item Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItemQty">
                    <Form.Label>Item Quantity</Form.Label>
                    <Form.Control ref={qtyRef} type="number" placeholder="Enter Item Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicItemImage">
                    <Form.Label>Item Image Link</Form.Label>
                    <Form.Control ref={imageRef} type="text" placeholder="Enter Item Image Link" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email ID" />
                </Form.Group>
                <button type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default AddInventoryItem;