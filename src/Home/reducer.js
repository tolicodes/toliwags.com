import {
  without,
} from 'lodash';

import {
  SET_CLIENTS,
  SET_HOME_TEXT,
  SET_NAV,
  FILTER_CLIENTS,
} from './actions';

const initialState = {
  homeText: {},
  clients: [],
  nav: [],
  clientFilters: {
    tag: [],
    tech: [],
    industry: [],
  },
};

export default function (state = initialState, { type, data, ...rest }) {
  switch (type) {
    case SET_HOME_TEXT: {
      return {
        ...state,
        homeText: data,
      };
    }

    case SET_CLIENTS: {
      return {
        ...state,
        clients: data,
      };
    }

    case SET_NAV: {
      return {
        ...state,
        nav: data,
      };
    }

    case FILTER_CLIENTS: {
      const {
        filterType,
        tag,
      } = rest;

      const filters = {
        ...state.clientFilters,
      };

      if (filters[filterType].includes(tag)) {
        filters[filterType] = without(filters[filterType], tag);
      } else {
        filters[filterType] = [...filters[filterType], tag];
      }

      return {
        ...state,
        clientFilters: filters,
      };
    }

    default: {
      return state;
    }
  }
}
