import StyledLanding from "./Landing.module.css";
import mainDog from "../../content/landing_orangeDog.svg";
import { NavLink } from "react-router-dom";
import info from "../../content/info-circle-svgrepo-com.svg";
import InfoMenu from "./infoMenu/infoMenu";
import { useState } from "react";

export default function Landing() {
  const [showInfo, setShowInfo] = useState(false);

  function onClickInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <div className={StyledLanding.main} id="landingmain">
      <div className={StyledLanding.container}>
        <img
          className={StyledLanding.mainDog}
          src={mainDog}
          alt="Main Orange Dog"
        />
        <div className={StyledLanding.maintext}>
          <h1>Welcome to Individual Project: Dogs</h1>
          <p>
            On here you will be able to find many information regarding dog
            breeds around the globe! Whenever you are ready, just press the
            button to go home and get to know the page
          </p>
          <NavLink to="/home" className={StyledLanding.bone}>
            Home
          </NavLink>
          <svg
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <img src={info} alt="" onClick={onClickInfo} />
        </div>
      </div>
      <div className={StyledLanding.infoContainer}>
        {showInfo ? <InfoMenu /> : null}
      </div>
    </div>
  );
}
