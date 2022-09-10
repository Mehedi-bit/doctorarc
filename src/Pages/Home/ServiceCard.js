import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Album"/></figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;