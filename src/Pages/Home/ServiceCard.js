import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="card bg-base-100 shadow-xl py-5">
            <figure><img src={service.img} alt="Album"/></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;