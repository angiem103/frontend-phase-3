import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import VetCard from './VetCard'
import { useState, useEffect} from 'react';

function Vets({pets, appointments}) {

    const [vets, setVets] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/veterinarians/1")
        .then(r => r.json())
        .then(vets => setVets(vets))
      }, []);

    // const renderVets = vets.map((vet) => (
    //     <div key={vet.id}>
    //         <VetCard vet={vet} pets={pets} appointments={appointments}/>
    //     </div>
    // ))

    console.log(vets.appointments)

    return (
        <div>
            {/* <CardGroup > {renderVets} </CardGroup> */}
            <VetCard vet={vets} pets={pets} appointments={appointments}/>
         </div>
    )
}

export default Vets;