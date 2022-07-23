import React from 'react';
import Card from 'react-bootstrap/Card';

function VetCard({vet}) {

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

    const renderAppointments = vet.appointments.map((appointment) => {
        const patient = appointment.patient
        return patient ? (
        <div key={appointment.id}>
            <p>Appointments</p>
            <ul>
                <b>Patient: {patient.name}</b>
                <p>Date: {appointment.date}</p>
                <p>Time: {getTime(appointment)}</p>
            </ul>
        </div>
        ) : undefined
    })
    

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{vet.name}</Card.Title>
            <Card.Text>{vet.phone_number}</Card.Text>
            <ul>{renderAppointments}</ul>
            </Card.Body>
        </Card>
        </div>
    );
};

export default VetCard;