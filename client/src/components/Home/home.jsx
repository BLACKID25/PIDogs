import StyledHome from "./home.module.css";
import { DogCards, Filters, SearchBar } from "../index.components";
import { NavLink } from "react-router-dom";
import logo from "../../content/LOGO NUEVO.png";
import { useEffect, useState } from "react";
import Cargando from "../Loading/Cargando";
import { useSelector } from "react-redux";

export default function Home() {
  
  const dataDog = useSelector((state) => state.allDogs);
  
  // LOCAL STATES
  const [cargando, setcargando] = useState(null);

  useEffect(() => {
    if (!dataDog.length) {
      setcargando(true);
      setTimeout(() => {
        setcargando(false);
      }, 1000);
    }
  }, []);

  // RENDER

  return (
    <div className={StyledHome.homeMain}>
      <div className={StyledHome.mainImage}>
    {cargando ? <Cargando className={StyledHome.loading} /> : null}
        <img src= {logo} alt="homeImage" />
      </div>
      <div className={StyledHome.supBar}>
        <NavLink to="/" className={StyledHome.createButton}>
          <p> Regresar </p>
        </NavLink>
        <NavLink to="/createDog" className={StyledHome.createButton}>
          <p>Crear Dogs</p>
        </NavLink>
        <Filters />
      <SearchBar />
      </div>
      <DogCards />
    </div>
  );
}
