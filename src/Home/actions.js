export const DO_GET_HOME_TEXT = 'DO_GET_HOME_TEXT';
export const DO_GET_CLIENTS = 'DO_GET_CLIENTS';
export const DO_GET_NAV = 'DO_GET_NAV';

export const SET_HOME_TEXT = 'SET_HOME_TEXT';
export const SET_CLIENTS = 'SET_CLIENTS';
export const SET_NAV = 'SET_NAV';

export const FILTER_CLIENTS = 'FILTER_CLIENTS';

export function doGetHomeText() {
  return { type: DO_GET_HOME_TEXT };
}

export function doGetClients() {
  return { type: DO_GET_CLIENTS };
}

export function doGetNav() {
  return { type: DO_GET_NAV };
}

export function setHomeText(data) {
  return { type: SET_HOME_TEXT, data };
}

export function setClients(data) {
  return { type: SET_CLIENTS, data };
}

export function setNav(data) {
  return { type: SET_NAV, data };
}

export function filterClients(filterType, tag) {
  return { type: FILTER_CLIENTS, filterType, tag };
}
