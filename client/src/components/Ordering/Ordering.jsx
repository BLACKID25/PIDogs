import style from "./Ordering.module.css";
import { useDispatch } from "react-redux";
import { orderDogs } from "../../redux/actions";

export default function Ordering() {
  const dispatch = useDispatch();

  function handleClick(event) {
    dispatch(orderDogs(event.target.name, event.target.value));
  }

  return (
    <div className={style.orderContainer}>
      <div className={style.nameOrder}>
        <p>Ordenar</p>
        <button
          name="name"
          value="asc"
          onClick={handleClick}
          className={style.ascNameButton}
        ></button>
        <button
          name="name"
          value="desc"
          onClick={handleClick}
          className={style.descNameButton}
        ></button>
      </div>
      <div className={style.weightOrder}>
        <p>Peso</p>
        <button
          name="weight"
          value="asc"
          onClick={handleClick}
          className={style.ascWButton}
        ></button>
        <button
          name="weight"
          value="desc"
          onClick={handleClick}
          className={style.descWButton}
        ></button>
      </div>
    </div>
  );
}
