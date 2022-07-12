import React from 'react';
import PetCard from './PetCard';
import CardGroup from 'react-bootstrap/CardGroup';



function Pets({allpets}) {

    const renderPets = allpets.map((pet) => (
        <div key={pet.id}>
            <PetCard pet={pet}/>
        </div>
    ))

    return (
        <div>
            <CardGroup > {renderPets} </CardGroup>
         </div>
    )
};

export default Pets