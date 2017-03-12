import React from 'react';
import { shallow } from 'enzyme';
import Photo from '../src/components/Photo/photo';

function setup() {
  const props = {
    photo: {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'http://placehold.it/600/771796',
      thumbnailUrl: 'http://placehold.it/150/dff9f6'
    }
  };

  const wrapper = shallow(<Photo {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Photo component', () => {

  it('should render self and its children', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.type()).toEqual('tr');
    expect(wrapper.find('tr').children()).toHaveLength(5);
    expect(wrapper.find('td').children()).toHaveLength(5);
    expect(wrapper.find('img')).toHaveLength(2);
    expect(wrapper.find('img').first().parent().is('td')).toEqual(true);
    expect(wrapper.find('td').children().find('div')).toHaveLength(3);
  });

});
