import React from 'react';

const ServiceCard = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title text-primary-content">{name}</h2>
                    <p>
                        {
                            slots.length ? <span>{slots[0]}</span> : <span className="text-red-400 text-xl">Try another date</span> 
                        }
                    </p>
                    <p>{slots.length} {slots.length? 'slots' : 'slot'} available</p>
                    <div className="card-actions pt-6">
                        <label onClick={()=>{setTreatment(service)}} disabled={slots.length===0} htmlFor="booking-modal" className="btn btn-secondary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;