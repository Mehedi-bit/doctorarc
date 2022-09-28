import React from 'react';
import img from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const CareCard = () => {
    
    return (
        <div className="flex" style={ { } }>
            <div className="card lg:card-side bg-base-100 rounded-none space-x-20 py-4 md:px-32 justify-self-center">
                <figure>
                    <img className="rounded-md w-92 h-96" src={img} alt="Album"/>
                </figure>
                <div className="card-body md:my-32">
                    <h2 className="card-title text-4xl font-bold pb-4">Exceptional Dental Care, on Your Terms</h2>
                    <p className="flex-grow-0 pb-4">Why is this important? For the simple reason that relationship you have with your chosen dental practitioner will colour your confidence in and encourage a positive attitude towards your dental health. So, the question that then needs to be answered is how does one choose a dentist Sheffield to experience an extraordinary level of care and patient-service excellence?</p>
                    <div className="justify-start">
                    <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareCard;