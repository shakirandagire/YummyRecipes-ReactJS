import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Categories from '../Components/Categories/Viewcategories'

describe('Categories component', () => {
    const wrapper = shallow(<Categories />);
    const preventDefault = jest.fn();
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

})