import React from 'react';

const HomeInventoryItem = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.item;
    return (
        <div>
            <h1>{name}</h1>

        </div>
    );
};

export default HomeInventoryItem;