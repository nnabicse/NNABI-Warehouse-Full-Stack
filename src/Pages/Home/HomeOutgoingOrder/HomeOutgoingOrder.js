import React from 'react';
import { Card } from 'react-bootstrap';

const HomeOutgoingOrder = (props) => {
    const { name, price, img, quantity, client } = props.order;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            price
                        }

                    </Card.Text>
                    <Card.Text>
                        {
                            quantity
                        }

                    </Card.Text>
                    <Card.Footer>
                        {
                            client
                        }
                    </Card.Footer>
                </Card.Body>
            </Card>

        </div>
    );
};

export default HomeOutgoingOrder;