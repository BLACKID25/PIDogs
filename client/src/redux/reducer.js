import {
  ADD_ALL,
  FILTER_DOGS,
  ORDER_DOGS,
  SEARCH_DOG,
  SLICE_DOGS,
  UPDATE_TEMPERAMENTS,
} from "./action-types";
import { sliceArray, sortingByName, sortingByWeight } from "../helpers";

const initialState = {
  allDogs: [],
  pgDogs: [],
  filteredDogs: [],
  temperaments: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL:
      return {
        ...state,
        allDogs: payload,
        filteredDogs: payload,
      };
    case SEARCH_DOG:
      return {
        ...state,
        filteredDogs: payload,
      };

    case SLICE_DOGS:
      return {
        ...state,
        pgDogs: state.filteredDogs.slice(
          ...sliceArray(payload.currentPage, payload.postsPerPage)
        ),
      };
    case ORDER_DOGS:
      const { param, order } = payload;
      let result = [];
      if (param === "name") {
        if (order === "asc") {
          result = sortingByName(state.filteredDogs.slice()); // Dogs come from API already ordened by name
        }
        if (order === "desc") {
          result = sortingByName(state.filteredDogs.slice()).reverse();
        }
      }
      if (param === "weight") {
        result = sortingByWeight(state.filteredDogs.slice(), order);
      }
      return {
        ...state,
        filteredDogs: [...result],
      };

    case FILTER_DOGS:
      const { filter, type, secondFilter } = payload;
      let filtered = [];
      if (!secondFilter) {
        if (type === "origin") {
          if (filter === "All") {
            filtered = state.allDogs;
          }
          if (filter === "Created") {
            filtered = state.allDogs.filter((dog) => dog.created);
          }
          if (filter === "Listed") {
            filtered = state.allDogs.filter((dog) => !dog.created);
          }
        }
        if (type === "temperaments") {
          if (filter === "All") filtered = state.allDogs;
          else {
            filtered = state.allDogs.filter((dog) =>
              dog.temperament.includes(filter)
            );
          }
        }
      } else {
        if (type === "origin") {
          let firstFilter = state.allDogs.filter((dog) =>
            dog.temperament.includes(secondFilter)
          );
          if (filter === "All") {
            filtered = firstFilter;
          }
          if (filter === "Created") {
            filtered = firstFilter.filter((dog) => dog.created);
          }
          if (filter === "Listed") {
            filtered = firstFilter.filter((dog) => !dog.created);
          }
        }
        if (type === "temperaments") {
          let firstFilter = [];
          if (secondFilter === "Created") {
            firstFilter = state.allDogs.filter((dog) => dog.created);
          }
          if (secondFilter === "Listed") {
            firstFilter = state.allDogs.filter((dog) => !dog.created);
          }
          if (filter === "All") filtered = firstFilter;
          else {
            filtered = firstFilter.filter((dog) =>
              dog.temperament.includes(filter)
            );
          }
        }
      }
      return {
        ...state,
        filteredDogs: filtered,
      };
    case UPDATE_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    default:
      return { ...state };
  }
}
