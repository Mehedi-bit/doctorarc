import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  const bannerStyle = {
    paddingBottom: "5%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "100%",
  }
  return (
    <div className="hero min-h-screen" style={bannerStyle}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
