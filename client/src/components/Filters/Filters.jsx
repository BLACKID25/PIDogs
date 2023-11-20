// import style from "./Filters.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { filterDogs } from "../../redux/actions";

// export default function Filters() {
//   // GLOBAL STATES

//   const dispatch = useDispatch();
//   const allDogs = useSelector((state) => state.allDogs);
//   const temperaments = useSelector((state) => state.temperaments);

//   // HELPERS

//   let anyCreated = false;
//   allDogs.forEach((dog) => {
//     if (dog.created) anyCreated = true;
//   });
//   let count = 1;

//   // HANDLERS

//   function handleChange(event) {
//     const originFilter = document.getElementsByName("origin")[0].value; // const[0].value
//     const temperamentFilter =
//       document.getElementsByName("temperaments")[0].value;
//     if (originFilter == "All" || temperamentFilter == "All") {
//       // Did this so that when returning to "All" on any filter and the other
//       // has a value active, leaves the active filter.
//       let value = null;
//       let name = null;
//       if (originFilter == "All") {
//         value = temperamentFilter;
//         name = "temperaments";
//       }
//       if (temperamentFilter == "All") {
//         value = originFilter;
//         name = "origin";
//       }
//       dispatch(filterDogs(value, name));
//     } else if (event.target.name === "temperaments" && originFilter !== "All") {
//       dispatch(filterDogs(event.target.value, "temperaments", originFilter));
//     } else {
//       dispatch(filterDogs(event.target.value, "origin", temperamentFilter));
//     }
//     sessionStorage.setItem(event.target.name, event.target.value);
//   }

//   // RENDER
//   return (
//     <div className={style.filterContainer}>
//       <select
//         onChange={handleChange}
//         name="origin"
//         defaultValue={sessionStorage.getItem("origin") || "All Dogs"}
//         className={style.name}
//       >
//         <option value="All">All Dogs</option>
//         {anyCreated ? <option value="Listed">Listed</option> : null}
//         {anyCreated ? <option value="Created">Created</option> : null}
//       </select>
//       <select
//         onChange={handleChange}
//         name="temperaments"
//         defaultValue={sessionStorage.getItem("temperaments") || "All"}
//         className={style.origin}
//       >
//         <option value="All">All</option>
//         {temperaments.map((temperament) => (
//           <option key={++count} value={temperament}>
//             {temperament}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }



//? CODIGO QUE FUNCIONA

import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterDogs } from "../../redux/actions";

export default function Filters() {
  // GLOBAL STATES

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.temperaments);

  // HELPERS

  let anyCreated = false;
  allDogs.forEach((dog) => {
    if (dog.created) anyCreated = true;
  });

  let count = 1

  // Obtener nombres únicos de temperamentos
  const uniqueTemperaments = Array.from(new Set(temperaments.map(t => t.name)));

  // HANDLERS

  function handleChange(event) {
    const originFilter = document.getElementsByName("origin")[0].value;
    const temperamentFilter =
      document.getElementsByName("temperaments")[0].value;

    if (originFilter === "All" || temperamentFilter === "All") {
      let value = null;
      let name = null;
      if (originFilter === "All") {
        value = temperamentFilter;
        name = "temperaments";
      }
      if (temperamentFilter === "All") {
        value = originFilter;
        name = "origin";
      }


      dispatch(filterDogs(value, name));
    } else if (event.target.name === "temperaments" && originFilter !== "All") {
      dispatch(filterDogs(event.target.value, "temperaments",  originFilter, sourceFilter));
    } else {
      dispatch(filterDogs(event.target.value, "origin", temperamentFilter, sourceFilter));
    }

    sessionStorage.setItem(event.target.name, event.target.value);
  }





  // RENDER
  return (
    <div className={style.filterContainer}>
      <select
        onChange={handleChange}
        name="origin"
        defaultValue={sessionStorage.getItem("origin") || "All Dogs"}
        className={style.name}
      >
        <option value="All">All Dogs</option>
        

        {anyCreated ? <option value="Listed">Api Dogs</option> : null}
        {anyCreated ? <option value="Created">Db Dogs</option> : null}
      </select>
      <select
        onChange={handleChange}
        name="temperaments"
        defaultValue={sessionStorage.getItem("temperaments") || "All"}
        className={style.origin}
      >
        <option value="All">All</option>
        
        {uniqueTemperaments.map((temperament, index) => (
          <option key={index} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>
    </div>
  );
}

