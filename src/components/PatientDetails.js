import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function PatientDetails({allpatients, onPatientDelete}) {

    const params = useParams();
    const patient = allpatients.find((patient) => patient.id == params.id);
    const navigate = useNavigate();

    function getTime(appointment) {

        const time = appointment.time.split('T')[1];
        const hour = time.split(':')[0];
        const minutes = time.split(':')[1];
        let timeValue = '';
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour == 0) {
            timeValue= "12"
          }

        const standardTime = timeValue + ':' + minutes;
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M.";

        return standardTime + dayNight;

    }

    const renderAppointments = patient ? patient.appointments.map((appointment) => {
        return (
            <div>
                 <p>Date: {appointment.date}</p>
                 <p>Time: {getTime(appointment)}</p>
            </div>
        );
    }) : undefined

    function handleDelete() {
        fetch(`http://localhost:9292/patients/${patient.id}`, {
            method: "DELETE",
        })
        .then(r =>r.json())
        .then(()=> {
            onPatientDelete(patient)
            navigate("/allpatients")
        });
    }

    return patient ? (
        <div key={patient.id}>
            <h1>{patient.name}</h1>
            <br></br>
            <p>Animal type: {patient.animal_type}</p>
            <p>Breed: {patient.breed}</p>
            <p>Age: {patient.age}</p>
            <p>Weight: {patient.weight}</p>
            <p>Sex: {patient.sex}</p>
                <div>
                    Upcoming appointment:
                    {patient.appointment? renderAppointments : <p>No Upcoming Appointments</p>}
                 </div>
            <Button onClick={handleDelete}>Delete Patient</Button>
            <Link to={`/editpatient/${patient.id}`}>
                <Button>Edit Patient Info</Button>
            </Link>
    </div>
    ) : undefined;
}

export default PatientDetails;