import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import VetCard from './VetCard'
import { useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';


function Vets() {

    const [vets, setVets] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/veterinarians")
        .then(r => r.json())
        .then(vets => setVets(vets))
      }, []);

    const renderVets = vets.map((vet) => (
        <div key={vet.id} className="item">
            <VetCard vet={vet}/>
        </div>
    ))

    return (
        <div >
            
                <h3 className='title'>Veterinarians</h3>
                
            <Row md={2} className="justify-content-md-center" id="row">
            {/* <CardGroup className='container'> {renderVets} </CardGroup> */}
            {renderVets}
            </Row>
         </div>
    )
}

export default Vets;