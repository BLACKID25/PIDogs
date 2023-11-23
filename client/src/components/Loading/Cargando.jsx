import style from "./Loading.module.css";

export default function cargando() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.mainCont}>
        <h1> Cargando..90% </h1>
        <img
          src="https://dogs-pi-spa.netlify.app/static/media/loading.918e8310.gif"
         
        />

      </div>

    </div>
  )
}
