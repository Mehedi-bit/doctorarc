import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    useEffect(() => {
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div>
                <h3 className="text-center text-primary-content text-bold text-xl pb-20">Available Appointments on {format(date, 'PP')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        services.map (service => 
                            <ServiceCard
                                key = {service._id}
                                service = {service}
                                setTreatment={setTreatment}
                            >
                            </ServiceCard>
                        )
                    }
                </div>
            </div>
            { treatment && <BookingModal 
                    treatment={treatment} 
                    date={date}
                    setTreatment = {setTreatment} 
            ></BookingModal> }
        </div>
    );
};

export default AvailableAppointments;
