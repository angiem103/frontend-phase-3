import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Pets from "./components/Pets";
import Home from "./components/Home";
import PetDetails from "./components/PetDetails";
import NewPet from "./components/NewPet";
import EditPet from "./components/EditPet";
import Vets from "./components/Vets";
import { useState, useEffect} from "react";



function App() {

  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(r => r.json())
    .then(pets => setPets(pets))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
    .then(r => r.json())
    .then(appointments => setAppointments(appointments))
  }, []);

  function addPatient(newPet){
    setPets([...pets,newPet])
  }

  function deletePatient(patient){
    const updatedPatients = pets.filter(pet => pet.id !== patient.id)
    setPets(updatedPatients)
  }

  function handleEdit(editedPet){
    const unchangedPatients = pets.filter(pet => pet.id !== editedPet.id)
    setPets([unchangedPatients,editedPet])
  }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/vets" element={<Vets pets={pets} appointments={appointments}/>} />
        <Route path="/allpatients" element={<Pets allpets={pets}/>} />
        <Route path="/allpatients/:id" element={<PetDetails allpets={pets} appointments={appointments} onPatientDelete={deletePatient}/>} />
        <Route path="/newpatient" element={<NewPet onAddNewPatient={addPatient} />} />
        <Route path="/editpatient/:id" element={<EditPet allpets={pets} onEditPatient={handleEdit}/>} />
        <Route path="/" element ={<Home allpets={pets}/>} />
      </Routes>
    </div>
  );
}

export default App;
