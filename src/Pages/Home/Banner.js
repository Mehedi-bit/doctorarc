import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  const buttonStyle = {
    background: "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
    color: "white", 
    fontWeight: "bold"

  }
  const bannerStyle = {
    paddingRight: "3%",
    paddingLeft: "3%",
    paddingBottom: "5%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "100%",
  }
  return (
    <div class="hero min-h-screen" style={bannerStyle}>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary" style={buttonStyle}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
