import {
  takeLatest,
  select,
  put,
  all,
} from 'redux-saga/effects';

import {
  getHomeText,
  getClients,
  getNav,
} from './api';

import {
  handleError,
} from '../api';

import {
  DO_GET_HOME_TEXT,
  DO_GET_CLIENTS,
  DO_GET_NAV,

  doGetHomeText,
  doGetClients,
  doGetNav,

  setHomeText,
  setClients,
  setNav,
} from './actions';

function* selectPathName() {
  return yield select(({ router }) => router.location.pathname);
}

function* apiRequest(getter, setter) {
  const res = yield handleError(() => getter());
  if (res) yield put(setter(res));
}

function* onDoGetHomeText() {
  yield apiRequest(getHomeText, setHomeText);
}

function* onDoGetClients() {
  yield apiRequest(getClients, setClients);
}

function* onDoGetNav() {
  yield apiRequest(getNav, setNav);
}

function* onInitialize() {
  if ((yield selectPathName()) === '/') {
    yield put(doGetHomeText());
    yield put(doGetClients());
    yield put(doGetNav());
  }
}

export default function* root() {
  yield all([
    onInitialize(),
    yield takeLatest(DO_GET_NAV, onDoGetNav),
    yield takeLatest(DO_GET_HOME_TEXT, onDoGetHomeText),
    yield takeLatest(DO_GET_CLIENTS, onDoGetClients),
    yield takeLatest(DO_GET_NAV, onDoGetClients),
  ]);
}
