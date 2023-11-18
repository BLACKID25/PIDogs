import axios from "axios";

import {
  ADD_ALL,
  ORDER_DOGS,
  SEARCH_DOG,
  SLICE_DOGS,
  FILTER_DOGS,
  UPDATE_TEMPERAMENTS,
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
  const endpoint = `/dogs/name?="${name}"`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (data.message) return alert(data.message);
      return dispatch({ type: SEARCH_DOG, payload: data });
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
    }
  };
}

export function temperaments() {
  const endpoint = `/temperaments`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({ type: UPDATE_TEMPERAMENTS, payload: data });
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
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

export function filterDogs(filter, type, secondFilter) {
  return {
    type: FILTER_DOGS,
    payload: {
      filter: filter,
      type: type,
      secondFilter: secondFilter,
    },
  };
}
