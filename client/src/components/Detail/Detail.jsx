import style from "./Detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import bckDog from "../../content/sampleDog.svg";
import Loading from "../Loading/Loading";
import { addAll } from "../../redux/actions";
import Edit from "./Edit/Edit";

export default function Detail() {
  // LOCAL STATES
  const [imageDim, setIamgeDim] = useState({ w: 0, h: 0 });
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, showEdit] = useState({ active: false, editing: null });

  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  // DIS/MOUNT/UPDATE

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/dogs/${id}`);
        console.log("Response:", response); // Imprime la respuesta completa en la consola
        const data = response.data;
        setDog(data);
      } catch (error) {
        console.error("Error:", error); // Imprime el error completo en la consola
  
        if (error.response) {
          const { data } = error.response;
          alert(data.message);
        } else {
          alert("Error de red o servidor no disponible");
        }
  
        nav("/home");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [id, nav]);

  // Loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // In order to know how to render card direction, this useEffect will load the width and height into a state
  useEffect(() => {
    let image = document.getElementById("dogimage");
    setIamgeDim({ w: image ? image.naturalWidth : 0, h: image.naturalHeight });
  }, [dog]);

  // HANDLERS
  function handleIMGError() {
    const image = document.getElementById("dogimage");
    image.src =
      "https://static.vecteezy.com/system/resources/previews/016/461/442/non_2x/cute-dog-puppy-face-pet-animal-character-with-in-animated-cartoon-illustration-vector.jpg";
  }

  async function handleDelete(id) {
    try {
      const response = await axios.delete(`/dogs/${id}`);
      if (response.status === 200) {
        alert(response.data.message);
        dispatch(addAll());
        setTimeout(() => {
          nav("/home");
        }, 400);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  }

  function handleEditClick(event) {
    showEdit({ active: true, editing: event.target.id });
  }

  // RENDER
  return (
    <div className={style.mainDetail}>
      {loading ? <Loading /> : null}
      <img
        src={bckDog}
        alt="RefDog"
        className={`${
          imageDim.w > imageDim.h ? style.wideDog : style.stretchDog
        }`}
      />
      <div
        className={`${
          imageDim.w > imageDim.h ? style.wideContainer : style.stretchContainer
        }`}
        >
        <img
          src={dog.image}
          alt={dog.name}
          id="dogimage"
          onError={handleIMGError}
          />
        <div className={style.infoContainer}>
          <h3>ID: {dog.id}</h3>
          
          <h1>
            {dog.name}
            {dog.created ? (
              <button
                className={style.editingButtons}
                id="Name"
                onClick={handleEditClick}
                title="Edit info"
              />
            ) : null}
          </h1>
          <hr className={style.separator} />
          <h4>Descripción de la Raza:</h4>
          <p>
            <b>Height: </b> {dog.height} cm
            {dog.created ? (
              <button
                className={style.editingButtons}
                id="Height"
                onClick={handleEditClick}
                title="Edit info"
              />
            ) : null}
          </p>
          <p>
            <b>Weight: </b> {dog.weight} kg
            {dog.created ? (
              <button
                className={style.editingButtons}
                id="Weight"
                onClick={handleEditClick}
                title="Edit info"
              />
            ) : null}
          </p>
          {dog.temperament ? (
            <p>
              <b>Temperaments: </b> {dog.temperament.join(", ")}
            </p>
          ) : (
            <p>
              <b>Temperaments: </b>
            </p>
          )}
          <p>
            <b>Life expectancy: </b> {dog.life_span}
            {dog.created ? (
              <button
                className={style.editingButtons}
                id="Life expectancy"
                onClick={handleEditClick}
                title="Edit info"
              />
            ) : null}
          </p>
        </div>
        <Link to="/home" className={style.backButton}></Link>
       
      </div>
    </div>
  );
}
