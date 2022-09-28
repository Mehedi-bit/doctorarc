import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <div>
                <h3 className="text-center text-primary text-bold text-xl">Available servies on {format(date, 'PP')}</h3>
                <h2 className="text-center py-4 text-gray-400">Please select a service</h2>
            </div>
        </div>
    );
};

export default AvailableAppointments;
