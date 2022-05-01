import React from 'react';

const InventoryItem = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.item;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button>Manage</button></td>
        </tr>
    );
};

export default InventoryItem;