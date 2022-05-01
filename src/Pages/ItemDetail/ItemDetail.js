import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import './ItemDetail.css';

const ItemDetail = () => {
    const { id } = useParams();
    const [items, setItems] = useItems();
    console.log(items);
    let selectedItem = {};
    items.filter(item => item.id == id).map(filteredItem => selectedItem = { ...filteredItem })
    const { name, price, desc, img, quantity, supplier } = selectedItem;

    const handleItemDetailDeliveredButton = (id) => {
        console.log(selectedItem);
        const newQuantity = parseInt(selectedItem.quantity) - 1;
        console.log(newQuantity)
        // Object.keys(selectedItem).map(key => {
        //     if (key === 'quantity') {
        //         selectedItem[key] = newQuantity;

        //     }
        // })

        // const updatedItems = items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item));

        // console.log(updatedItems);
        const objIndex = items.findIndex((obj => obj.id == id));
        console.log(objIndex);
        let newItems = [];
        items[objIndex].quantity = newQuantity;
        setItems(newItems = [...items]);


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

        </div>
    );
};

export default ItemDetail;