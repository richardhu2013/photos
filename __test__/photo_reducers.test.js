import reducer from '../src/reducers';
import * as types from '../src/constants/actionTypes';

describe('photo reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      photos: []
    });
  });

  it('should handle PHOTOS_FETCH', () => {
    expect(
      reducer([], {
        type: types.PHOTOS_FETCH,
        photos: [{
          albumId: 1,
          id: 2,
          title: 'reprehenderit est deserunt velit ipsam',
          url: 'http://placehold.it/600/771796',
          thumbnailUrl: 'http://placehold.it/150/dff9f6'
        }]
      })
    ).toEqual({
      photos: [{
        albumId: 1,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'http://placehold.it/600/771796',
        thumbnailUrl: 'http://placehold.it/150/dff9f6'
      }]
    });
  });
});
