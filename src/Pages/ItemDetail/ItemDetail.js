import { useEffect, useRef, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.css';

const ItemDetail = () => {
    const qtyRef = useRef(0);
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(item => setItem(item))
    }, [item])


    const { name, price, desc, img, quantity, supplier } = item;

    const handleItemDetailDeliveredButton = (id) => {
        const newQuantity = parseInt(item.quantity) - 1;
        const updatedQuantity = { newQuantity };

        fetch(`http://localhost:5000/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(setItem(item));

    }
    const handleRestockButton = (event) => {
        event.preventDefault();
        const qty = qtyRef.current.value;
        const newQuantity = parseInt(item.quantity) + parseInt(qty);
        const updatedQuantity = { newQuantity };
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(setItem(item));
        toast("Stock Updated Successfully")
        qtyRef.current.value = "";
    }

    return (
        <div className='item-detail-section-container'>
            <div className='item-detail-header-container'>
                <h1 className='item-detail-header'>ITEM DETAIL</h1>
            </div>
            <div className='item-detail-card-form-container'>
                <div className='item-detail-card-container'>
                    <Card className='item-detail-card'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Title>Supplier: {supplier}</Card.Title>
                            <Card.Title>Price: {price} USD</Card.Title>
                            <Card.Title>Qty: {quantity} Units</Card.Title>
                            <Card.Text>
                                {desc}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='item-detil-deliver-button-container border-0 bg-white'>
                            <button className='item-detil-deliver-button btn btn-primary w-100 fw-bold border-none' onClick={() => handleItemDetailDeliveredButton(id)}>Delivered</button>
                        </Card.Footer>
                    </Card>
                </div>

                <div className='item-detail-restock-form-container'>
                    <Form className='item-detail-restock-form' onSubmit={handleRestockButton}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h4 className='restock-header'>Restock {name}</h4></Form.Label>
                            <Form.Control ref={qtyRef} required type="number" placeholder="Enter Quantity" />
                        </Form.Group>
                        <div className='item-detail-restock-button-container'>
                            <button className='item-detail-restock-button btn btn-primary w-100 fw-bold' type='submit'>Restock</button>
                        </div>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default ItemDetail;