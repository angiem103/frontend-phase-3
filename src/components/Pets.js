import React from 'react'

function Pets({allpets}) {

    const renderPets = allpets.map((pet) => (
        <div key={pet.id}>
            <h1>{pet.name}</h1>
        </div>
    ))

    return (
        <h1>{renderPets}</h1>
    )
};

export default Pets