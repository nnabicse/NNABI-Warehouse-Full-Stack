import React from 'react';

const IncomingPurchase = (props) => {
    const { _id, name, price, desc, img, quantity, supplier } = props.purchase;
    const { handleRecievePurchaseButton, handleRemoveforRecieve } = props
    console.log(props);
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button onClick={() => {
                handleRecievePurchaseButton(_id);
                handleRemoveforRecieve(_id);
            }}
            >Recieved</button></td>
        </tr>
    );
};

export default IncomingPurchase;