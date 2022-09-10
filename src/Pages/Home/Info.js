import React from 'react';
import clockImage from '../../assets/icons/clock.svg';
import markerImage from '../../assets/icons/marker.svg';
import phoneImage from '../../assets/icons/phone.svg';

import InfoCard from './InfoCard';

const Info = () => {
    const cardStyle1 = {
        background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
        color: "white",
        padding: "4% 5% 4% 5%"
      }
    const cardStyle2 = {
        background: "#3A4256",
        color: "white",
        padding: "4% 5% 4% 5%"
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard clockImage={clockImage} cardStyle1={cardStyle1} title={"Opening Hours"} body={"Everyday 24/7"}></InfoCard>
            <InfoCard clockImage={markerImage} cardStyle1={cardStyle2} title={"Visit our location"} body={"Broklyn, NY 10056, United States"}></InfoCard>
            <InfoCard clockImage={phoneImage} cardStyle1={cardStyle1} title={"Contact us now"} body={"+000 123 456789"}></InfoCard>
        </div>
    );
};

export default Info;