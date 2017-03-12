import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

export function fetchPhotos() {
  return dispatch => {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        console.log(res.data.slice(-10));
        dispatch(setPhotos(res.data.slice(-10)));
      });
  };
}

function setPhotos(photos) {
  return {
    type: actionTypes.PHOTOS_FETCH,
    photos
  };
}
