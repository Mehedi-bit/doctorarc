import React from 'react';

const ServiceCard = ({service}) => {
    const {name, slots} = service;
    return (
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
                    <button disabled={slots.length===0} className="btn btn-secondary text-white">Book appartment</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;