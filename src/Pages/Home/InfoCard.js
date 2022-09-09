import React from 'react';

const InfoCard = ({clockImage, cardStyle1, title}) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl" style={cardStyle1}>
        <figure>
            <img src={clockImage} alt="Album"/></figure>
        <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
        </div>
        </div>
    );
};

export default InfoCard;