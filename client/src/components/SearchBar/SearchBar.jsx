import style from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchDog, addAll } from "../../redux/actions";

export default function SearchBar() {
  // GLOBAL STATES
  const dipslayedDogs = useSelector((state) => state.filteredDogs.length);
  const allDogs = useSelector((state) => state.allDogs.length);
  const dispatch = useDispatch();
  const currentFilter = {
    filter1: sessionStorage.getItem("temperaments"),
    filter2: sessionStorage.getItem("origin"),
  };

  // HANDLERS

  function handleClick(event) {
    if (event.type === "click" || event.code === "Enter") {
      const { value } = document.getElementById("input");
      if (value) {
        dispatch(searchDog(value));
        document.getElementsByName("origin")[0].value = "All";
        document.getElementsByName("temperaments")[0].value = "All";
        sessionStorage.setItem("temperaments", "All");
        sessionStorage.setItem("origin", "All");
        document.getElementById("input").value = ""; //! Added
      } else {
        alert("Introduce a breed to search");
      }
    }
  }

  // RENDER

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInput}
        id="input"
        type="text"
        onKeyDown={handleClick}
      />
      <a className={style.searchButton} onClick={handleClick}></a>

      {dipslayedDogs < allDogs &&
      currentFilter.filter1 === "All" &&
      currentFilter.filter2 === "All" ? (
        <button
          onClick={() => {
            dispatch(addAll());
            document.getElementById("input").value = "";
          }}
          className={style.Xbutton} 
        />
      ) : null }
      </div>
  );
}
