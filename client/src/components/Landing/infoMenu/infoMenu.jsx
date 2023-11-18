import style from "./infoMenu.module.css";
import profile from "../../../content/IMG_5728.png";
import gitlogo from "../../../content/25231.png";

export default function InfoMenu() {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className={style.info}>
      <div className={style.square}></div>
      <h1>Created by:</h1>
      <div className={style.infoCard}>
        <img src={profile} alt="" />
        <h2>Mateo Guerrero</h2>
      </div>
      <div className={style.text}>
        <p>
          Henry FullStack bootcamp project with assigned topic: Dogs. Created
          for educational purposes using JavaScript and Node.js, React, Redux,
          Express and Postgres
        </p>
      </div>
      <img
        src={gitlogo}
        alt=""
        className={style.gitLogo}
        onClick={() => openNewTab("https://github.com/MateoGuerreroE")}
      />
    </div>
  );
}
