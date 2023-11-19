import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Landing,
  Error,
  Detail,
  CreateDog,
} from "./components/index.components";
import { useEffect } from "react";
import { addAll, updateTemperaments } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  //GLOBAL STATE SET

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAll());
    dispatch(updateTemperaments());
    // This on reload of home / other view, so filtering resets.
    if (sessionStorage.getItem("temperaments"))
      sessionStorage.setItem("temperaments", "All");
    if (sessionStorage.getItem("origin"))
      sessionStorage.setItem("origin", "All");
  }, []);

  // RENDER
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createDog" element={<CreateDog />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
