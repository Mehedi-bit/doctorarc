import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className="flex justify-center items-center my-20">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-120px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 space-y-7 py-5 px-5">
                <h3 className="text-xl text-[#19D3AE] font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">Make an appointment today</h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsa, minus voluptas, eaque doloribus quis animi numquam voluptate necessitatibus expedita similique vitae nobis. Aperiam, quaerat! Perspiciatis ab recusandae consectetur illo.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;