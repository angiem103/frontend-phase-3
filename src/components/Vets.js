import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import VetCard from './VetCard'
import { useState, useEffect} from 'react';

function Vets({pets}) {

    const [vets, setVets] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/veterinarians")
        .then(r => r.json())
        .then(vets => setVets(vets))
      }, []);

    const renderVets = vets.map((vet) => (
        <div key={vet.id}>
            <VetCard vet={vet} pets={pets}/>
        </div>
    ))

    return (
        <div>
            <CardGroup > {renderVets} </CardGroup>
         </div>
    )
}

export default Vets;