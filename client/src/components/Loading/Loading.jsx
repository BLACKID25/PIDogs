import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.mainCont}>
        <h1>Loading...</h1>
        <img
          src="https://cdn.dribbble.com/users/338126/screenshots/15483287/media/2f03c8290d612078b76883e579d4fd99.gif"
          alt="Loading Dog gif"
        />
      </div>
    </div>
  );
}
