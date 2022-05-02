import React from 'react';

const ManageInventory = (props) => {
    const { id, name, price, desc, img, quantity, supplier } = props.item;
    const { handleDeleteButton } = props;
    // console.log(handleDeleteButton)

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{desc}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><button onClick={() => handleDeleteButton(id)}>Delete</button></td>
        </tr>
    );
};

export default ManageInventory;