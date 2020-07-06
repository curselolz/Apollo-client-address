import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getTokenRequest } from '../request/authorize';
import * as actions from '../actions';
import * as api from '../request/request';
import * as gql from '../request/gql';
import { MESSAGES } from '@/constants';

function* fetchTokenAuthorize() {
  try {
    const response = yield call(getTokenRequest);
    yield put(actions.getToken.success(response.access_token));
  } catch (ex) {
    yield put(actions.getToken.failure(ex));
    toast.error(MESSAGES.SERVER_ERROR);
  }
}

function* fetchAllStreets() {
  try {
    const response = yield call(api.fetchData, gql.ALL_STREETS);
    yield put(actions.fetchStreets.success(response));
  } catch (ex) {
    yield put(actions.fetchStreets.failure(ex));
    toast.error(MESSAGES.SERVER_ERROR);
  }
}

function* fetchBuildingByStreet({ payload }) {
  try {
    const response = yield call(api.fetchDataWithVariables, gql.GET_HOUSE_BY_STREET, payload);
    yield put(actions.fetchBuildingByStreet.success(response));
  } catch (ex) {
    yield put(actions.fetchBuildingByStreet.failure(ex));
    toast.error(MESSAGES.SERVER_ERROR);
  }
}

function* setCurrentDistrict({ payload }) {
  try {
    yield put(actions.setCurrentDistrict.success(payload));
  } catch (ex) {
    yield put(actions.setCurrentDistrict.failure(ex));
    toast.error(MESSAGES.SERVER_ERROR);
  }
}

export default function* ordersCombineSagas() {
  yield takeLatest(actions.getToken.request, fetchTokenAuthorize);
  yield takeLatest(actions.fetchStreets.request, fetchAllStreets);
  yield takeLatest(actions.fetchBuildingByStreet.request, fetchBuildingByStreet);
  yield takeLatest(actions.setCurrentDistrict.request, setCurrentDistrict);
}
