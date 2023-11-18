import style from "./CreateDog.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll } from "../../redux/actions";
import { validateForm } from "../../helpers";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import bone from "../../content/bone.svg";
import RefDog from "../../content/createDogRef.svg";

export default function CreateDog() {
  //LOCAL STATES
  const [dogToPost, setDogToPost] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span1: "",
    life_span2: "",
    image: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
    message: "Complete corrently all information to submit a dog",
  });

  // GLOBAL STATES
  const temperaments = useSelector((state) => state.temperaments);
  const allDogs = useSelector((state) => state.allDogs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // HANDLERS

  function handleChange(event) {
    let temperamentList = [...dogToPost.temperament];
    if (event.target.type === "checkbox") {
      if (event.target.checked) {
        temperamentList.push(event.target.value);
      } else {
        temperamentList = dogToPost.temperament.filter(
          (temp) => temp != event.target.value
        );
      }
      setDogToPost({ ...dogToPost, temperament: temperamentList });
    } else {
      setDogToPost({ ...dogToPost, [event.target.id]: event.target.value });
      setErrors(
        validateForm({ ...dogToPost, [event.target.id]: event.target.value })
      );
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    //? Can become helper to reduce code.
    let newObj = {
      name: dogToPost.name,
      height: `${dogToPost.minHeight} - ${dogToPost.maxHeight}`,
      weight: `${dogToPost.minWeight} - ${dogToPost.maxWeight}`,
      life_span: `${dogToPost.life_span1} - ${dogToPost.life_span2} years`,
      image: `${dogToPost.image}`,
      temperament: dogToPost.temperament,
    };
    let existing = allDogs.find((dog) => dog.name === dogToPost.name);
    try {
      if (!existing) {
        const response = await axios.post("/dogs", newObj);
        dispatch(addAll());
        alert(response.data.message);
        setTimeout(() => {
          navigate("/home");
        }, 400);
      } else {
        document.getElementById("name").value = "";
        alert(
          "The breed name you are trying to add already exists! Try a new one"
        );
        setErrors({
          ...errors,
          name: "Name must contain only letters, no special characters nor numbers",
          message: "Complete corrently all information to submit a dog",
        });
      }
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  }
  // RENDER

  return (
    <div className={style.createMain}>
      <img
        src={bone}
        alt=""
        style={{ zIndex: `0` }}
        className={style.boneImg}
      />
      <img
        src={RefDog}
        alt=""
        style={{ zIndex: `0` }}
        className={style.dogImg}
      />
      <NavLink to="/home" title="Return to home"></NavLink>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className={style.form}
      >
        <h1>Create your own dog!</h1>

        <div className={style.contentContainer}>
          {/**/}
          <div className={style.textInputs}>
            <div className={style.singleInput}>
              <label>Breed name: </label>
              <input type="text" id="name" />
            </div>
            <p>{errors.name}</p>
            <div className={style.numberInputs}>
              <fieldset>
                <legend>Life expectancy:</legend>
                <label>From: </label>
                <input type="number" id="life_span1" />
                <label> to: </label>
                <input type="number" id="life_span2" />
                <p>{errors.life_span}</p>
              </fieldset>

              <fieldset>
                <legend>Height (cm)</legend>
                <label>From: </label>
                <input type="number" id="minHeight" />
                <label> to: </label>
                <input type="number" id="maxHeight" />
                <p>{errors.height}</p>
              </fieldset>

              <fieldset>
                <legend>Weight (kg)</legend>
                <label>From: </label>
                <input type="number" id="minWeight" />
                <label> to: </label>
                <input type="number" id="maxWeight" />
                <p>{errors.weight}</p>
              </fieldset>
            </div>

            <div className={style.singleInput}>
              <label>Image (URL): </label>
              <input type="url" id="image" />
            </div>
            <p>{errors.image}</p>
          </div>

          <fieldset className={style.temperaments}>
            <legend>Temperaments: </legend>
            <div className={style.tempContainer}>
              {temperaments.map((temp, index) => (
                <div key={index} className={style.checkContainer}>
                  <input
                    key={index}
                    type="checkbox"
                    value={temp}
                    className={style.checkbox}
                  />
                  {temp}
                </div>
              ))}
            </div>
          </fieldset>
          {dogToPost.temperament.length < 3 ? (
            <p style={{ height: `1.5em`, alignSelf: `center` }}>
              * At least 3 temperaments must be selected
            </p>
          ) : (
            <p style={{ height: `1.5em` }}></p>
          )}
          <div className={style.buttonCont}>
            {errors.message || dogToPost.temperament.length < 3 ? (
              <button type="submit" disabled>
                Submit
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
