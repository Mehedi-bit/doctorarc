import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    const formattedDate = format(date, 'PP');

    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () => 
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (error) {
        return 'An error has occurred: ' + error.message;
    } 

    return (
        <div>
            <div>
                <h3 className="text-center text-primary-content text-bold text-xl pb-20">Available Appointments on {format(date, 'PP')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        services?.map (service => 
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
                    refetch={refetch}
            ></BookingModal> }
        </div>
    );
};

export default AvailableAppointments;
