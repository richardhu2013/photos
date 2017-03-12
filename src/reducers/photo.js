import * as actionTypes from '../constants/actionTypes';

const initialState = {
  photos: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.PHOTOS_FETCH:
      return setPhotos(state, action);
  }
  return state;
}

function setPhotos(state, action) {
  return Object.assign({}, state, {
    photos: action.photos
  });
}
