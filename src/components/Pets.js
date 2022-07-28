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
        <h3 className='title'>Patients</h3>
        <div class="container">

            <CardGroup > {renderPets} </CardGroup>
         </div>
         </div>
    )
};

export default Pets