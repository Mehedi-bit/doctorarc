import React from 'react';
import cavityImage from '../../assets/images/cavity.png';
import fluorideImage from '../../assets/images/fluoride.png';
import whiteningImage from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride treatment',
            description: "Fluoride treatment is very important, should purpose to get one at least every year.",
            img: cavityImage
        },
        {
            _id: 2,
            name: 'Cavity filling',
            description: "Cavity filling is very important, should purpose to get one at least every year.",
            img: fluorideImage
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: "Teeth whitening is very important, should purpose to get one at least every 4 month.",
            img: whiteningImage
        }
    ]
    return (
        <div className="my-12">
            <div className="text-center">
                <h3 className="uppercase text-xl font-bold text-primary font-bold">Our services</h3>
                <h2 className="text-4xl">Services We Provide</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-20">
                {
                    services.map(service => 
                        <ServiceCard 
                            key={service._id}
                            service={service}
                            > 
                        </ServiceCard>
                    )
                }
            </div>

        </div>
    );
};

export default Services;