import React from 'react';
import Card from 'react-bootstrap/Card';

function VetCard({vet}) {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{vet.name}</Card.Title>
            <Card.Text>{vet.phone_number}
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default VetCard;