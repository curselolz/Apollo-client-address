import { createSelector } from 'reselect';

const root = state => state.address;

export const getCurrentDistrict = state => root(state).currentDistrict;
export const getAllStreets = state => root(state).allStreets;
export const getSelectedHouse = state => root(state).buildings;

export const getSelectedStreets = createSelector(
  getCurrentDistrict,
  getAllStreets,
  (currentDistrict, streets) => {
    if (currentDistrict && currentDistrict !== null) {
      return streets
        .filter(el => {
          if (typeof el.ofDistrict[0] !== 'undefined') {
            return el.ofDistrict[0].name.fullName === currentDistrict;
          }
          return el;
        })
        .map(el => ({ value: el.id, label: el.name.fullName }));
    }
    return streets.map(el => {
      return { value: el.id, label: el.name.fullName };
    });
  }
);
