import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const nameRef = useRef()
    const priceRef = useRef()
    const qtyRef = useRef()
    const imageRef = useRef()
    const descRef = useRef()
    const emailRef = useRef()
    const supplierRef = useRef()
    const handleSubmitButton = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = qtyRef.current.value;
        const image = imageRef.current.value;
        const desc = descRef.current.value
        const supplier = supplierRef.current.value
        const email = emailRef.current.value;

        const newItem = { name, price, quantity, image, desc, supplier, email }


        fetch(`http://localhost:5000/item`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        toast("Item Added in Stock")
        event.target.reset();
    }
    return (
        <div className='add-new-item-section-container'>
            <div className='add-new-item-header-container'>
                <h1 className='add-new-item-header'>Add New Item</h1>
            </div>
            <div className='add-new-item-form-container'>
                <Form className='add-new-item-form' onSubmit={handleSubmitButton}>
                    <Form.Group className="mb-3" controlId="formBasicItemName">
                        <Form.Control required ref={nameRef} type="text" placeholder="Enter Item Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicItemPrice">
                        <Form.Control required ref={priceRef} type="number" placeholder="Enter Item Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicItemQty">
                        <Form.Control required ref={qtyRef} type="number" placeholder="Enter Item Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                        <Form.Control required ref={supplierRef} type="text" placeholder="Enter Supplier Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicItemDesc">
                        <Form.Control required ref={descRef} type="text" placeholder="Enter Item Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicItemImage">
                        <Form.Control required ref={imageRef} type="text" placeholder="Enter Item Image Link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required value={user.email} ref={emailRef} type="email" placeholder="Enter Email ID" />
                    </Form.Group>
                    <div className='add-new-item-submit-button-container'>
                        <button className='add-new-item-submit-button btn btn-primary fw-bold' type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;