import StyledHome from "./home.module.css";
import { DogCards, Filters, SearchBar } from "../index.components";
import { NavLink } from "react-router-dom";
import homeDog from "../../content/homeDog.svg";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

export default function Home() {
  // LOCAL STATES

  const [loading, setLoading] = useState(null);

  const appData = useSelector((state) => state.allDogs);

  useEffect(() => {
    if (!appData.length) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  // RENDER

  return (
    <div className={StyledHome.homeMain}>
      {loading ? <Loading className={StyledHome.loading} /> : null}
      <div className={StyledHome.mainImage}>
        <img src={homeDog} alt="homeImage" />
      </div>
      <div className={StyledHome.supBar}>
        <NavLink to="/createDog" className={StyledHome.createButton}>
          <p>Create you Dog</p>
        </NavLink>
        <Filters />
        <SearchBar />
      </div>
      <DogCards />
    </div>
  );
}
