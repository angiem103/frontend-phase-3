import React from "react";
import { useParams } from "react-router-dom";

function PetDetails({allpets}) {

    const params = useParams();
    const pet = allpets.find((pet) => pet.id == params.id);

    return pet ? (
    <div>
        <h1>{pet.name}</h1>
        <br></br>
        <p>Animal type: {pet.animal_type}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Weight: {pet.weight}</p>
        <p>Sex: {pet.sex}</p>
    </div>
    )
    : undefined
}

export default PetDetails;