import style from "./CreateDog.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll, updateTemperaments } from "../../redux/actions";
import { validateForm } from "../../helpers";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import bone from "../../content/bone.svg";
import RefDog from "../../content/createDogRef.svg";

export default function CreateDog() {
  // LOCAL STATES
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
    message: "Complete correctly all information to submit a dog",
  });

  // GLOBAL STATES
  const allDogs = useSelector((state) => state.allDogs);
  const temperaments = useSelector((state) => state.temperaments);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // EFFECT HOOK
  useEffect(() => {
    // Dispatch an action to fetch temperaments when the component mounts
    dispatch(updateTemperaments());
  }, [dispatch]);

  // HANDLERS
  function handleChange(event) {
    setDogToPost({ ...dogToPost, [event.target.id]: event.target.value });
    setErrors(
      validateForm({ ...dogToPost, [event.target.id]: event.target.value })
    );
  }

  function handleTemperamentChange(event) {
    // For handling temperament selection
    const selectedTemperament = event.target.value;
    setDogToPost({ ...dogToPost, temperament: [...dogToPost.temperament, selectedTemperament] });
  }

  async function handleSubmit(event) {
    event.preventDefault();

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
        const response = await axios.post("http://localhost:3001/dogs", newObj);
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
          name:
            "Name must contain only letters, no special characters nor numbers",
          message: "Complete correctly all information to submit a dog",
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
      <img src={bone} alt="" style={{ zIndex: `0` }} className={style.boneImg} />
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


        <fieldset className={style.temperaments}>
        <div className={style.tempContainer}>
               <legend>Temperaments: </legend>
              <select id="temperament" onChange={handleTemperamentChange} multiple>
                {temperaments.map((temp, index) => (
                  <option key={index} value={temp.name}>
                    {temp.name}
                  </option>
                ))}
              </select>
            </div>
        </fieldset>



        <div className={style.contentContainer}>
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

          <div className={style.buttonCont}>
            {errors.message ? (
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