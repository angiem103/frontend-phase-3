import React from 'react';
import Card from 'react-bootstrap/Card';

function VetCard({vet, pets, appointments}) {

    const filteredAppointments = appointments.filter((appointment) => {
        return appointment.veterinarian_id == vet.id
    })

    const patientIds = filteredAppointments.map(appointment => appointment.patient_id)
    const petIds = pets.map(pet => pet.id)


    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{vet.name}</Card.Title>
            <Card.Text>{vet.phone_number}
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
};

export default VetCard;