import React from 'react';
import './HomeInventoryItem.css';
import { Card } from 'react-bootstrap';

const HomeInventoryItem = (props) => {
    const { name, price, desc, img, quantity, supplier } = props.item;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button>Manage</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default HomeInventoryItem;