import React from 'react';
import img from '../../assets/images/treatment.png';

const CareCard = () => {
    
    return (
        <div class="card lg:card-side bg-base-100 rounded-none space-x-20 px-32 py-4">
            <figure>
                <img className="rounded-md w-92 h-96" src={img} alt="Album"/>
            </figure>
            <div class="card-body md:my-32">
                <h2 class="card-title text-4xl font-bold pb-4">Exceptional Dental Care, on Your Terms</h2>
                <p className="flex-grow-0 pb-4">Why is this important? For the simple reason that relationship you have with your chosen dental practitioner will colour your confidence in and encourage a positive attitude towards your dental health. So, the question that then needs to be answered is how does one choose a dentist Sheffield to experience an extraordinary level of care and patient-service excellence?</p>
                <div class="justify-start">
                    <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold" >Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CareCard;