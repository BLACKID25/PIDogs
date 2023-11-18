import { useState } from "react";
import style from "./Edit.module.css";
import axios from "axios";

export default function Edit(props) {
  const { param } = props;
  let type;

  const [error, setError] = useState(
    param === "Name" ? "Only letters allowed" : "Only numbers allowed"
  );
  const [info, setInfo] = useState("");

  if (param !== "Name") {
    type = "number";
  } else {
    type = "text";
  }

  function handleChange(event) {
    let validator;
    if (param === "Name") {
      validator = /^[A-Za-z\s]+$/;
      if (!validator.test(event.target.value)) {
        setError(
          "Name must containt only letters, no numbers or special characters"
        );
        setInfo("");
      } else {
        setError("");
        setInfo(event.target.value);
      }
    } else {
      validator = /^[1-9]\d*$/;
      const min = document.getElementById("min").valueAsNumber;
      const max = document.getElementById("max").valueAsNumber;
      if (!validator.test(min) || !validator.test(max)) {
        setError(`${param} only receives positive valid numbers`);
        setInfo("");
      } else if (min >= max) {
        setError("Min value must be lower than Max value");
        setInfo("");
      } else {
        setError("");
        setInfo(`${min} - ${max}`);
      }
    }
  }

  async function handleButton() {
    try {
      let prop = param.toLowerCase();
      let localInfo = info;
      if (param === "Life expectancy") {
        prop = "life_span";
        localInfo = `${info} years`;
      }
      let endpoint = `/dogs?${prop}=${localInfo}`;
      const response = await axios.put(endpoint, {
        id: props.id,
      });
      alert(response.data.message);
      location.reload();
      props.showEdit(false);
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  }

  return (
    <div className={style.editMain}>
      <a
        onClick={() => {
          props.showEdit({ active: false, editing: null });
        }}
        className={style.exit}
      ></a>
      <h1>Editing {param}</h1>
      <div className={style.input}>
        {type === "text" ? (
          <div className={style.textInput}>
            <label>New value: </label>
            <input type="text" onChange={handleChange} />
          </div>
        ) : null}
        {type === "number" ? (
          <div className={style.numberInput}>
            <label>Min value: </label>
            <input type="number" onChange={handleChange} id="min" />
            <label>Max value: </label>
            <input type="number" onChange={handleChange} id="max" />
          </div>
        ) : null}
        <p>{error}</p>
        {error ? (
          <button disabled>Save</button>
        ) : (
          <button onClick={handleButton}>Save</button>
        )}
      </div>
    </div>
  );
}
