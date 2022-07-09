import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Patients from "./components/Patients";
import { useState, useEffect} from "react";


function App() {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/patients")
    .then(r => r.json())
    .then(pets => setPets(pets))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>Hello World</h1>
      <Routes>
        <Route path="/allpets" element={<Patients />} />
        <Route path="/" element ={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
