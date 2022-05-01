import React from 'react';

const OutgoingOrder = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.order;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button>Delivered</button></td>
        </tr>
    );
};

export default OutgoingOrder;