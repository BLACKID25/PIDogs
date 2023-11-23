import StyledLanding from "./Landing.module.css";
import { NavLink } from "react-router-dom";


export default function Landing() {

  return (
    <div className={StyledLanding.main} id="landingmain">
      <div className={StyledLanding.container}>
      
        <div className={StyledLanding.maintext}>
          <h1>Proyecto Individual "Dogs"</h1>
           <p> CreateBy Eric Chourio</p>
             <NavLink to="/home" className={StyledLanding.bone}>
                       Play Home
             </NavLink>
        </div>
      </div>
    </div>
  );
}
