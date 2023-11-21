//! ORIGINAL

// import { Link } from "react-router-dom";
// import StyledCard from "./DogCard.module.css";
// import weightIMG from "../../content/kg-weight.svg";

// export default function DogCard(props) {
//  console.log(props.dog)
//   function handleError() {
//     const image = document.getElementById("mainIMG");
//     image.src =
//       "https://static.vecteezy.com/system/resources/previews/016/461/442/non_2x/cute-dog-puppy-face-pet-animal-character-with-in-animated-cartoon-illustration-vector.jpg";
//   }
//   return (
//     <div className={StyledCard.cardMain}>
//       <div className={StyledCard.generalCont}>
//         <div className={StyledCard.imageCont}>
//           <img
//             src={props.dog.image}
//             alt={props.dog.name}
//             id="mainIMG"
//             onError={handleError}
//           />
//         </div>
//         <div className={StyledCard.infoCont}>
//           <Link to={`/detail/${props.dog.id}`}>
//             <h1>{props.dog.name}</h1>
//             <h1>{props.dog.id}</h1>
            
           
            
//             <p>{props.dog && props.dog.temperament ? props.dog.temperament.join(", ") : "No add temperamet"}</p>
//             <div className={StyledCard.weight}>
//               <img src={weightIMG} alt="" />
//               <h2>{props.dog.weight}</h2>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
//!


import React from "react";
import { Link } from "react-router-dom";
import StyledCard from "./DogCard.module.css";
import weightIMG from "../../content/kg-weight.svg";

export default function DogCard(props) {
  function handleError() {
    const image = document.getElementById("mainIMG");
    image.src =
      "https://static.vecteezy.com/system/resources/previews/016/461/442/non_2x/cute-dog-puppy-face-pet-animal-character-with-in-animated-cartoon-illustration-vector.jpg";
  }

  const renderTemperaments = () => {
    const { Temps, temperament } = props.dog;

    if (Temps && Array.isArray(Temps) && Temps.length > 0) {
      return (
        <p>
          Temperamentos: 
          {Temps.map((temp) => temp.name).join(", ")}
        </p>
      );
    } else if (temperament) {
      // Estructura de la base de datos
      const temperamentArray = Array.isArray(temperament)
        ? temperament
        : temperament.split(", ");

      return <p>Temperamentos: {temperamentArray.join(", ")}</p>;
    }

    return null; // No hay temperamentos disponibles
  };

  return (
    <div className={StyledCard.cardMain}>
      <div className={StyledCard.generalCont}>
        <div className={StyledCard.imageCont}>
          <img
            src={props.dog.image}
            alt={props.dog.name}
            id="mainIMG"
            onError={handleError}
          />
        </div>
        <div className={StyledCard.infoCont}>
          <Link to={`/detail/${props.dog.id}`}>
            <h1>{props.dog.name}</h1>
            {renderTemperaments()}
            <div className={StyledCard.weight}>
              <img src={weightIMG} alt="" />
              <h2>{props.dog.weight}</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}