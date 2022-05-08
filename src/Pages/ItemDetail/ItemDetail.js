import { useEffect, useRef, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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
        qtyRef.current.value = "";
    }

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{quantity}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => handleItemDetailDeliveredButton(id)}>Delivered</button>
                </Card.Footer>
            </Card>

            <Form onSubmit={handleRestockButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Restock {name}</Form.Label>
                    <Form.Control ref={qtyRef} type="number" placeholder="Enter Quantity" />
                </Form.Group>
                <button type='submit'>Restock</button>
            </Form>

        </div>
    );
};

export default ItemDetail;