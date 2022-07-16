import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function PetDetails({allpets, appointments, onPatientDelete}) {

    const params = useParams();
    const pet = allpets.find((pet) => pet.id == params.id);
    const appointment = appointments.find((appointment) => appointment.patient_id == pet.id);
    const navigate = useNavigate();

    function getTime() {

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
    <div>
        <h1>{pet.name}</h1>
        <br></br>
        <p>Animal type: {pet.animal_type}</p>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Weight: {pet.weight}</p>
        <p>Sex: {pet.sex}</p>
        <div>
            Upcoming appointment:
            <p></p>
            <p>Date: {appointment ? appointment.date : "No scheduled appointments"}</p>
            <p>{appointment ? "Time:" : undefined} {appointment ? getTime(appointment) : undefined}</p>
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