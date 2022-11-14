import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    
    console.log('user is', user);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers : {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => setAppointments(data));
        }
        
    }, [user])

    return (
        <div>
            <h2 className="text-xl">My Appointments: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => 
                            <tr>
                                <th>{index+1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                            </tr>
                        )
                        }
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>      
    );
};

export default MyAppointments;