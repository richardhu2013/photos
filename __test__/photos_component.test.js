import React from 'react';
import { shallow, mount } from 'enzyme';
import Photos from '../src/components/Photo/photos';
import Photo from '../src/components/Photo/photo';
import Heading from '../src/components/Photo/heading';

function setup() {
  const props = {
    photos: [{
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'http://placehold.it/600/771796',
      thumbnailUrl: 'http://placehold.it/150/dff9f6'
    }],
    onFetch: jest.fn()
  };

  const shallowWrapper = shallow(<Photos {...props} />);
  const mountWrapper = mount(<Photos {...props} />);

  return {
    props,
    shallowWrapper,
    mountWrapper
  };
}

describe('Photos component', () => {

  it('should render self and its subcomponents', () => {
    const {
      shallowWrapper,
      mountWrapper,
      props
    } = setup();

    expect(shallowWrapper.find('table').hasClass('table')).toEqual(true);
    expect(shallowWrapper.find('table').hasClass('is-striped')).toEqual(true);
    expect(shallowWrapper.find('table').hasClass('is-striped')).toEqual(true);
    expect(shallowWrapper.find(Heading)).toHaveLength(1);
    expect(shallowWrapper.find(Photo)).toHaveLength(1);
    expect(mountWrapper.props().onFetch.mock.calls.length).toBeGreaterThan(0);
  });

});
