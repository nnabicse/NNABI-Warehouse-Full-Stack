import React from 'react';

const HomeIncomingPurchase = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.purchase;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default HomeIncomingPurchase;