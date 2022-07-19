import React from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PetCard from './PetCard';

function Search({pets}) {

    const [selected, setSelected] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [searchedPets, setSearchedPets] = useState([])

    const animalTypes = pets.map(pet => pet.animal_type)
    const uniqueAnimals = [...new Set(animalTypes)];

    function handleChange(e) {
        setSelected(e.target.value)
    }

    function handleSearch(e) {

        e.preventDefault()
        const filteredPets = pets.filter((pet) => {
            return pet.name.toLowerCase() == animalName.toLowerCase() && pet.animal_type == selected 
        })
        const searchedPet = filteredPets.map((pet) => (
            <div key={pet.id}>
                <PetCard pet={pet}/>
            </div>
        ))
        setSearchedPets(searchedPet)    

    }

    return (
        <Form>
      <Form.Group className="mb-3" controlId="searchForm">
        <Form.Label>Find Patient</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={e => setAnimalName(e.target.value)} />
        <Form.Select aria-label="Default select example" value={selected} onChange={handleChange}>
        <option disabled={true} value="">
          Choose Animal Type
        </option>
            {uniqueAnimals.map((animal) => <option key={animal}>{animal}</option>) }
    </Form.Select>
      </Form.Group>
      <Button variant="primary" type="search" onClick={handleSearch}>
        Search
      </Button>
      {searchedPets}
    </Form>
        
    )
};

export default Search;


