import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Pets from "./components/Pets";
import Home from "./components/Home";
import PetDetails from "./components/PetDetails";
import NewPet from "./components/NewPet";
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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/allpatients" element={<Pets allpets={pets}/>} />
        <Route path="/allpatients/:id" element={<PetDetails allpets={pets} appointments={appointments}/>} />
        <Route path="/newpatient" element={<NewPet />} />
        <Route path="/" element ={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
