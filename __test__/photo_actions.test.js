import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions';
import * as types from '../src/constants/actionTypes';
import expect from 'expect';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch photos', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('create PHOTOS_FETCH when photos being fetched', () => {
    moxios.stubRequest('https://jsonplaceholder.typicode.com/photos', {
      status: 200,
      response: [{
        albumId: 1,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'http://placehold.it/600/771796',
        thumbnailUrl: 'http://placehold.it/150/dff9f6'
      }]
    });

    const expectedActions = {
      type: types.PHOTOS_FETCH,
      photos: [{
        albumId: 1,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'http://placehold.it/600/771796',
        thumbnailUrl: 'http://placehold.it/150/dff9f6'
      }]
    };

    const store = mockStore({
      data: []
    });

    return store.dispatch(actions.fetchPhotos())
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions);
      });
  });
});
