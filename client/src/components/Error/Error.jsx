import style from "./Error.module.css";
import dogError from "../../content/ErrorDog.svg";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className={style.mainError}>
      <div className={style.content}>
        <h1>Oops! You shouldn't be here</h1>
        <img src={dogError} />
        <div className={style.shadowHelper}></div>
        <p>The page you are trying to reach does not exist (404)</p>
        <NavLink to="/home">
          <p>Return Home</p>
        </NavLink>
      </div>
    </div>
  );
}
