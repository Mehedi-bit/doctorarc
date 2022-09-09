import React from 'react';
import clockImage from '../../assets/icons/clock.svg';
import markerImage from '../../assets/icons/marker.svg';
import phoneImage from '../../assets/icons/phone.svg';

import InfoCard from './InfoCard';

const Info = () => {
    const infoStyle = {
        paddingLeft: "2%",
        paddingRight: "2%"
    }
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
        <div className="grid grid-cols-3 gap-4" style = {infoStyle}>
            <InfoCard clockImage={clockImage} cardStyle1={cardStyle1} title={"Opening Hours"}></InfoCard>
            <InfoCard clockImage={markerImage} cardStyle1={cardStyle2} title={"Visit our location"}></InfoCard>
            <InfoCard clockImage={phoneImage} cardStyle1={cardStyle1} title={"Contact us now"}></InfoCard>
        </div>
    );
};

export default Info;