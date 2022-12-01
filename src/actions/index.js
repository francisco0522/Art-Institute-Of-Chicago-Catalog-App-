import {
  SET_CATALOGS,
  SET_VIEWTYPE,
  SET_PAGE,
  SET_LIMIT,
  SET_ARTWORK,
  SET_SCREEN,
  SET_FAVORITEARR,
} from './types';

export const setCatalog = payload => ({
  type: SET_CATALOGS,
  payload,
});

export const setViewType = payload => ({
  type: SET_VIEWTYPE,
  payload,
});

export const setPage = payload => ({
  type: SET_PAGE,
  payload,
});

export const setLimit = payload => ({
  type: SET_LIMIT,
  payload,
});

export const setArtwork = payload => ({
  type: SET_ARTWORK,
  payload,
});

export const setScreen = payload => ({
  type: SET_SCREEN,
  payload,
});


export const setFavoriteArr = payload => ({
  type: SET_FAVORITEARR,
  payload,
});
