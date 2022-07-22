import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function PetDetails({allpets, onPatientDelete}) {

    const params = useParams();
    const pet = allpets.find((pet) => pet.id == params.id);
    const navigate = useNavigate();

    function getTime(appointment) {

        const time = appointment.time.split('T')[1]
        const hour = time.split(':')[0]
        const minutes = time.split(':')[1]
        let timeValue = ''
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour;
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour == 0) {
            timeValue= "12";
          }

        const standardTime = timeValue + ':' + minutes
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M."; 

        return standardTime + dayNight

    }

    const renderAppointments = pet ? pet.appointments.map((appointment) => {
        return (
            <div>
        <p>Date: {appointment.date}</p>
        <p>Time: {getTime(appointment)}</p>
            </div>
        )
    }): undefined

    function handleDelete() {
        fetch(`http://localhost:9292/patients/${pet.id}`, {
            method: "DELETE",
        })
        .then(r =>r.json())
        .then(()=> {
            onPatientDelete(pet)
            navigate("/allpatients")
        })
    }

    return pet ? (
    <div key={pet.id}>
        <h1>{pet.name}</h1>
        <br></br>
        <p>Animal type: {pet.animal_type}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Weight: {pet.weight}</p>
        <p>Sex: {pet.sex}</p>
        <div>
            Upcoming appointment:
            {pet.appointment? renderAppointments : <p>No Upcoming Appointments</p>}
        </div>
        <Button onClick={handleDelete}>Delete Patient</Button>
        <Link to={`/editpatient/${pet.id}`}>
        <Button>Edit Patient Info</Button>
        </Link>
    </div>
    )
    : undefined
}

export default PetDetails;