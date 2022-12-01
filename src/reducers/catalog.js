import {
  SET_CATALOGS,
  SET_VIEWTYPE,
  SET_PAGE,
  SET_LIMIT,
  SET_ARTWORK,
  SET_SCREEN,
  SET_FAVORITEARR,
} from '../actions/types';

const initialState = {
  catalogs: [],
  viewtype: 1,
  page: 1,
  limit: 1,
  loading: false,
  moreLoading: false,
  artWork: {},
  screen: 'Home',
  favoritesCatalog: [],
};

export const catalogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATALOGS:
      return {
        ...state,
        catalogs: action.payload,
        loading: false,
        moreLoading: false,
      };
    case SET_VIEWTYPE:
      return {...state, viewtype: action.payload};
    case SET_PAGE:
      return {...state, page: action.payload};
    case SET_LIMIT:
      return {...state, limit: action.payload};
    case SET_ARTWORK:
      return {...state, artWork: action.payload};
    case SET_SCREEN:
      return {...state, screen: action.payload};
    case SET_FAVORITEARR:
      return {...state, favoritesCatalog: action.payload};
    default:
      return state;
  }
};
