import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Pets from "./components/Pets";
import Home from "./components/Home";
import PetDetails from "./components/PetDetails";
import { useState, useEffect} from "react";
import PetCard from "./components/PetCard";


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
      <Routes>
        <Route path="/allpets" element={<Pets allpets={pets}/>} />
        <Route path="/allpets/:id" element={<PetDetails/>} />
        <Route path="/" element ={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;
