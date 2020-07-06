import { actionCreator } from '@/utils';

const action = actionCreator('ADDRESS');

export const getToken = action('GET_TOKEN');

export const fetchStreets = action('GET_ALL_STREETS');
export const fetchBuildingByStreet = action('GET_BUILDING_STREET');

export const setCurrentDistrict = action('SET_CURRENT_DISTRICT');
