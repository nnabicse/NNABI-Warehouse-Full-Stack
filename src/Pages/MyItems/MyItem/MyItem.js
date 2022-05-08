import React from 'react';

const MyItem = (props) => {
    const { name, img, price, email, desc, quantity, supplier } = props.myItem;
    return (
        <div>
            <h5>
                {
                    name
                }
            </h5>


        </div>
    );
};

export default MyItem;