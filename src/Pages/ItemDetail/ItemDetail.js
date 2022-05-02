import { useRef } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import './ItemDetail.css';

const ItemDetail = () => {
    const qtyRef = useRef(0);
    const { id } = useParams();
    const [items, setItems] = useItems();
    console.log(items);
    let selectedItem = {};
    items.filter(item => item.id == id).map(filteredItem => selectedItem = { ...filteredItem })
    const { name, price, desc, img, quantity, supplier } = selectedItem;

    const handleItemDetailDeliveredButton = (id) => {
        const newQuantity = parseInt(selectedItem.quantity) - 1;
        const objIndex = items.findIndex((obj => obj.id == id));

        items[objIndex].quantity = newQuantity;
        const newItems = [...items];
        setItems(newItems);


    }
    const handleRestockButton = (event) => {
        event.preventDefault();
        const qty = qtyRef.current.value;
        const newQuantity = parseInt(selectedItem.quantity) + parseInt(qty);
        const objIndex = items.findIndex((obj => obj.id == id));
        items[objIndex].quantity = newQuantity;
        const newItems = [...items];
        setItems(newItems);
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