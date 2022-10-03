import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';

const AppointmentCard = ({date, setDate}) => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse  gap-32">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="Dentist chair" />
                <div>
                    {/* calender */}
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <h3 className="text-primary text-center text-bold">You selected {format(date, 'PP')}</h3>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;