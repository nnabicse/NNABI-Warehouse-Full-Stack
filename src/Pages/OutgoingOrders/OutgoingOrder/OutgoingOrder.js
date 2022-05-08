import React from 'react';

const OutgoingOrder = (props) => {
    const { name, price, desc, quantity, client } = props.order;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{client}</td>
        </tr>
    );
};

export default OutgoingOrder;