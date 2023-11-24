// import StyledCards from "./DogCards.module.css";
// import { DogCard, Ordering, Pagination } from "../index.components";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { sliceDogs } from "../../redux/actions";
// import splashbckg from "../../content/bckgSplash.svg";

// export default function DogCards() {
//   // LOCAL STATES
//   //* The || statement loads sessionStorage info or the default. This so when ppl comes back from detail or create
//   //* can return to the page they were.
//   const [currentPage, setPage] = useState(
//     Number(sessionStorage.getItem("currentPage")) || 1
//   );

//   const [visiblePosts, setVisiblePosts] = useState(
//     Number(sessionStorage.getItem("visiblePosts")) || 8
//   );

//   // GLOBAL STATES
//   const dispatch = useDispatch();
//   let dogsToDisplay = useSelector((state) => state.pgDogs);
//   let allDogs = useSelector((state) => state.filteredDogs);

//   // VARIABLES AND HELPERS

//   let totalPages = Math.ceil(allDogs.length / visiblePosts);
//   let navbar = document.getElementById("navbar")
//     ? document.getElementById("navbar")
//     : {};
//   let sticky = 315; // Set this to const as when comp reloads offset will be 0 and will keep It sticky.
//   window.onscroll = function () {
//     if (window.scrollY >= sticky) {
//       navbar.className = `${StyledCards.stickyNav}`;
//     } else {
//       navbar.className = `${StyledCards.pages_order}`;
//     }
//   };

//   // ON MOUNT/DISMOUNT/UPDATE

//   useEffect(() => {
//     if (currentPage > totalPages) setPage(1);
//     dispatch(sliceDogs(currentPage, visiblePosts));
//     sessionStorage.setItem("visiblePosts", visiblePosts);
//     sessionStorage.setItem("currentPage", currentPage);
//   }, [currentPage, visiblePosts, allDogs]);

//   // RENDER

//   return (
//     <div className={StyledCards.CardsContainer}>
//       <img src={splashbckg} alt="" className={StyledCards.splashIMG} />
//       <div className={StyledCards.pages_order} id="navbar">
//         <Ordering />
//         <Pagination
//           setPage={setPage}
//           totalPages={totalPages}
//           setVisiblePosts={setVisiblePosts}
//           visiblePosts={visiblePosts}
//         />
//       </div>
//       <div className={StyledCards.cardsMain}>
//         {dogsToDisplay.map((dog) => (
//           <DogCard dog={dog} key={dog.id} />
//         ))}
//       </div>
//     </div>
//   );
// }


// import StyledCards from "./DogCards.module.css";
// import { DogCard, Ordering, Pagination } from "../index.components";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { sliceDogs, updateTemperaments } from "../../redux/actions";
// import splashbckg from "../../content/bckgSplash.svg";

// export default function DogCards() {
//   LOCAL STATES
//   * The || statement loads sessionStorage info or the default. This so when ppl comes back from detail or create
//   * can return to the page they were.
//   const [currentPage, setPage] = useState(
//     Number(sessionStorage.getItem("currentPage")) || 1
//   );

//   const [visiblePosts, setVisiblePosts] = useState(
//     Number(sessionStorage.getItem("visiblePosts")) || 8
//   );

//   GLOBAL STATES
//   const dispatch = useDispatch();
//   let dogsToDisplay = useSelector((state) => state.pgDogs);
//   let allDogs = useSelector((state) => state.filteredDogs);

//   LOCAL STATE para los temperamentos
//   const [temperaments, setTemperaments] = useState([]);

//   VARIABLES AND HELPERS

//   let totalPages = Math.ceil(allDogs.length / visiblePosts);
//   let navbar = document.getElementById("navbar")
//     ? document.getElementById("navbar")
//     : {};
//   let sticky = 315; // Set this to const as when comp reloads offset will be 0 and will keep It sticky.
//   window.onscroll = function () {
//     if (window.scrollY >= sticky) {
//       navbar.className = `${StyledCards.stickyNav}`;
//     } else {
//       navbar.className = `${StyledCards.pages_order}`;
//     }
//   };

//   EFFECT para obtener los temperamentos
//   useEffect(() => {
//     const fetchTemperaments = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/temperaments");
//         const data = await response.json();

//         Guardar los temperamentos en el estado local y en el estado global
//         setTemperaments(data);
//         dispatch(updateTemperaments(data));
//       } catch (error) {
//         console.error("Error al obtener los temperamentos:", error);
//       }
//     };

//     fetchTemperaments();
//   }, []); // Este efecto se ejecuta solo una vez al montar el componente

//   ON MOUNT/DISMOUNT/UPDATE

//   useEffect(() => {
//     if (currentPage > totalPages) setPage(1);
//     dispatch(sliceDogs(currentPage, visiblePosts));
//     sessionStorage.setItem("visiblePosts", visiblePosts);
//     sessionStorage.setItem("currentPage", currentPage);
//   }, [currentPage, visiblePosts, allDogs]);

//   RENDER

//   return (
//     <div className={StyledCards.CardsContainer}>
//       <img src={splashbckg} alt="" className={StyledCards.splashIMG} />
//       <div className={StyledCards.pages_order} id="navbar">
//         <Ordering />
//         <Pagination
//           setPage={setPage}
//           totalPages={totalPages}
//           setVisiblePosts={setVisiblePosts}
//           visiblePosts={visiblePosts}
//         />
//       </div>
//       <div className={StyledCards.cardsMain}>
//         {dogsToDisplay.map((dog) => (
//           <div key={dog.id} className={StyledCards.dogCardContainer}>
//             <DogCard dog={dog} />
//             {/* Renderizar los temperamentos junto con cada tarjeta */}
//             <div className={StyledCards.temperamentsContainer}>
//               <h3>Temperaments:</h3>
//               <ul>
//                 {temperaments.map((temperament) => (
//                   <li key={temperament.id}>{temperament.name}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import StyledCards from "./DogCards.module.css";
import { DogCard, Ordering, Pagination } from "../index.components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceDogs } from "../../redux/actions";


export default function DogCards() {
  // LOCAL STATES

  const [currentPage, setPage] = useState(
    Number(sessionStorage.getItem("currentPage")) || 1
  );

  const [visiblePosts, setVisiblePosts] = useState(
    Number(sessionStorage.getItem("visiblePosts")) || 8
  );

  // GLOBAL STATES
  const dispatch = useDispatch();
  let dogsToDisplay = useSelector((state) => state.pgDogs);
  let allDogs = useSelector((state) => state.filteredDogs);

  // VARIABLES AND HELPERS

  let totalPages = Math.ceil(allDogs.length / visiblePosts);
  let navbar = document.getElementById("navbar")
    ? document.getElementById("navbar")
    : {};
  let sticky = 315; // Set this to const as when comp reloads offset will be 0 and will keep It sticky.
  
  //! permite dejar la barra fija cuando haces scroll a la pagina 
  window.onscroll = function () {
    if (window.scrollY >= sticky) {
      navbar.className = `${StyledCards.stickyNav}`;
    } else {
      navbar.className = `${StyledCards.pages_order}`;
    }
  };

  // ON MOUNT/DISMOUNT/UPDATE

  useEffect(() => {
    if (currentPage > totalPages) setPage(1);
    dispatch(sliceDogs(currentPage, visiblePosts));
    sessionStorage.setItem("visiblePosts", visiblePosts);
    sessionStorage.setItem("currentPage", currentPage);
  }, [currentPage, visiblePosts, allDogs]);

  // RENDER

  return (
    <div className={StyledCards.CardsContainer}>
      <img  src="https://static.vecteezy.com/system/resources/previews/008/291/069/original/dog-paw-seamless-pattern-bone-dog-footprint-pattern-cartoon-tile-fancy-cream-background-repeat-scarf-isolated-illustration-gift-or-wrapping-paper-puppy-texture-vector.jpg" className={StyledCards.splashIMG} />
      <div className={StyledCards.pages_order} id="navbar">
        <Ordering />
        <Pagination
          setPage={setPage}
          totalPages={totalPages}
          setVisiblePosts={setVisiblePosts}
          visiblePosts={visiblePosts}
        />
      </div>
      <div className={StyledCards.cardsMain}>
        {dogsToDisplay.map((dog) => (
          <DogCard dog={dog} key={dog.id} />
        ))}
      </div>
    </div>
  );
}