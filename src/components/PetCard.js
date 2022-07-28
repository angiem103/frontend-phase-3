import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function PetCard({pet}) {


    return (
        <div class="item"> 
            <Card >
            <Card.Body>
            <Card.Title >{pet.name}</Card.Title>
            <Card.Text> Animal Type: {pet.animal_type}
            </Card.Text>
            <Link to={`/allpatients/${pet.id}`}><Button variant="primary" >Details</Button >
            </Link>
            </Card.Body>
        </Card>
        </div>

        
    )
}


export default PetCard;