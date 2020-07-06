import { createReducer } from 'redux-act';
import produce from 'immer';

import * as actions from '../actions';

const initialState = {
  allStreets: [],
  buildings: [],
  currentDistrict: null,
};

export default createReducer(
  {
    [actions.getToken.request]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = true;
      }),
    [actions.getToken.success]: (state, payload) =>
      produce(state, nextState => {
        localStorage.setItem('accessToken', JSON.stringify(payload));
        nextState.statusLoading = false;
      }),
    [actions.getToken.failure]: (state, payload) =>
      produce(state, nextState => {
        localStorage.setItem('accessToken', 'error');
        nextState.statusLoading = false;
      }),
    [actions.fetchStreets.request]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = true;
      }),
    [actions.fetchStreets.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.allStreets = payload;
        nextState.statusLoading = false;
      }),
    [actions.fetchStreets.failure]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = false;
      }),
    [actions.fetchBuildingByStreet.request]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = true;
      }),
    [actions.fetchBuildingByStreet.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.buildings = payload;
        nextState.statusLoading = false;
      }),
    [actions.fetchBuildingByStreet.failure]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = false;
      }),
    [actions.setCurrentDistrict.request]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = true;
      }),
    [actions.setCurrentDistrict.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.currentDistrict = payload;
        nextState.statusLoading = false;
      }),
    [actions.setCurrentDistrict.failure]: (state, payload) =>
      produce(state, nextState => {
        nextState.statusLoading = false;
      }),
  },
  initialState
);
