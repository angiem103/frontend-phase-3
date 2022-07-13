import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// import { useParams } from "react-routher-dom";

function PetCard({pet}) {

    // const params = useParams();
    // const pet = allpets.find((pet) => pet.id == params.id);


    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>{pet.animal_type}
            </Card.Text>
            <Link to={`/allpatients/${pet.id}`}><Button variant="primary">Details</Button>
            </Link>
            </Card.Body>
        </Card>
        </div>
    )
}

export default PetCard;