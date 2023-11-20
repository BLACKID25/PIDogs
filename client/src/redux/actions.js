import axios from "axios";
import { throwError } from 'rxjs';
import { from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';



import {
  ADD_ALL,
  ORDER_DOGS,
  SEARCH_DOG,
  SLICE_DOGS,
  FILTER_DOGS,
  UPDATE_TEMPERAMENTS,
  //FILTER_BY_ORIGIN,
} from "./action-types";

export function addAll() {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: ADD_ALL,
        payload: data,
      });
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  };
}

export function searchDog(name) {
  const endpoint = `http://localhost:3001/dogs/find/name?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (data.message) return alert(data.message);
      return dispatch({ type: SEARCH_DOG, payload: data });
    } catch (error) {
      //const { data } = error.response;
      alert("DOG no existe");
    }
  };
}

// export function updateTemperaments() {
//   const endpoint = "http://localhost:3001/temperaments";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(endpoint);
//       dispatch({ type: UPDATE_TEMPERAMENTS, payload: data });
//     } catch (error) {
//       const { data } = error.response;
//       console.error("Error fetching temperaments:", data.message);
//     }
//   };
// }


// export function updateTemperaments() {
//   const endpoint = `/temperaments`;
//   return (dispatch) => {
//      from(axios.get(endpoint))
//        .pipe(
//          switchMap(({ data }) => [
//            { type: UPDATE_TEMPERAMENTS, payload: data },
//          ]),
//          catchError((error) => {
//            const { data } = error.response;
//            //console.error("Error fetching temperaments:", data.message);
//            return throwError(error);
//          }),
//        )
//        .subscribe((action) => dispatch(action));
//   };
//  }

export function updateTemperaments(dogId) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/temperaments`);
      dispatch({
        type: UPDATE_TEMPERAMENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching driver teams:", error);
    }
  };
}

export function sliceDogs(currentPage, postsPerPage) {
  return {
    type: SLICE_DOGS,
    payload: { currentPage: currentPage, postsPerPage: postsPerPage },
  };
}

export function orderDogs(param, order) {
  return {
    type: ORDER_DOGS,
    payload: { param: param, order: order },
  };
}

export function filterDogs(filter, type, secondFilter, sourceFilter) {
  return {
    type: FILTER_DOGS,
    payload: {
      filter: filter,
      type: type,
      secondFilter: secondFilter,
      sourceFilter: sourceFilter,
    },
  };
}


// export const filterByOrigin = (payload) =>{
//   return {
//     type: FILTER_BY_ORIGIN,
//     payload
//   }
// }
