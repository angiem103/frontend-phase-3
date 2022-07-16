import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function EditPet({allpets, onEditPatient}) {

    const params = useParams();
    const pet = allpets.find((pet) => pet.id == params.id);
    const navigate = useNavigate();
   
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [sex, setSex] = useState('');

    function handleSubmitChanges(e){
        e.preventDefault()
        const editedPatient = {
          name: name,
          animal_type: animalType,
          age: age,
          breed: breed,
          weight: weight,
          sex: sex,
        };

        console.log(editedPatient)

        fetch(`http://localhost:9292/patients/${pet.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editedPatient)
        })
        .then(r => r.json())
        .then(patient => {
           onEditPatient(patient)
           navigate(`/allpatients/${editedPatient.id}`)
          })
    }

    return pet ? (
        <div>
            <Form onSubmit={handleSubmitChanges}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Patient</Form.Label>
        <br></br>
        <text>Name:</text>
        <Form.Control type="text" defaultValue={pet.name} onChange={e => setName(e.target.value)}/>
        <br></br>
        <text>Animal Type:</text>
        <Form.Control type="text" defaultValue={pet.animal_type} onChange={e => setAnimalType(e.target.value)} />
        <br></br>
        <text>Age:</text>
        <Form.Control type="text" defaultValue={pet.age} onChange={e => setAge(e.target.value)} />
        <br></br>
        <text>Breed:</text>
        <Form.Control type="text" defaultValue={pet.breed} onChange={e => setBreed(e.target.value)} />
        <br></br>
        <text>Weight:</text>
        <Form.Control type="text" defaultValue={pet.weight} onChange={e => setWeight(e.target.value)} />
        <br></br>
        <text>Sex:</text>
        <Form.Control type="text" defaultValue={pet.sex} onChange={e => setSex(e.target.value)} />

      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Changes
      </Button>
    </Form>
        </div>
    ) : undefined
}

export default EditPet;