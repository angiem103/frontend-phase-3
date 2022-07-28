import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Patients from "./components/Patients";
import Home from "./components/Home";
import PatientDetails from "./components/PatientDetails";
import NewPatient from "./components/NewPatient";
import EditPatient from "./components/EditPatient";
import Vets from "./components/Vets";




function App() {

  const [patients, setPatients] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(r => r.json())
    .then(patients => setPatients(patients))
  }, []);


  function addPatient(newPatient){
    setPatients([...patients,newPatient])
  };

  function deletePatient(deletedPatient){
    const updatedPatients = patients.filter(patient => patient.id !== deletedPatient.id)
    setPatients(updatedPatients)
  };

  function handleEdit(editedPatient){
    const unchangedPatients = patients.filter(patient => patient.id !== editedPatient.id)
    setPatients([unchangedPatients,editedPatient])
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/vets" element={<Vets patients={patients} />} />
        <Route path="/allpatients" element={<Patients allpatients={patients}/>} />
        <Route path="/allpatients/:id" element={<PatientDetails allpatients={patients} onPatientDelete={deletePatient}/>} />
        <Route path="/newpatient" element={<NewPatient onAddNewPatient={addPatient} />} />
        <Route path="/editpatient/:id" element={<EditPatient allpatients={patients} onEditPatient={handleEdit}/>} />
        <Route path="/" element ={<Home allpatients={patients}/>} />
      </Routes>
    </div>
  );
};

export default App;
