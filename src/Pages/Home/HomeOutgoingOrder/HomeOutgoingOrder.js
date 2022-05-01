import React from 'react';

const HomeOutgoingOrder = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.order;
    return (
        <div>
            <h2>{name}</h2>

        </div>
    );
};

export default HomeOutgoingOrder;