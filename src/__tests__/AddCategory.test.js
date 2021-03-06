import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AddCategory from '../Components/Categories/AddCategory';

describe('AddCategory component', () => {
  const wrapper = shallow(<AddCategory />);

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders 1 <AddCategory/> component', () => {
    const component = shallow(<AddCategory />);
    expect(component).toHaveLength(1);
  });

  it('it returns props correctly', () => {
    const component = shallow(<AddCategory name="app" />);
    expect(component.instance().props.name).toBe('app');
  });

  it('contains MuiThemeProvider', () => {
    expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
  });

  it('contains divs', () => {
    expect(wrapper.find('div')).toHaveLength(3);
  });

  it('contains Paper', () => {
    expect(wrapper.find('Paper')).toHaveLength(1);
  });

  it('contains p', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('contains TextField ', () => {
    expect(wrapper.find('TextField')).toHaveLength(2);
  });

  it('contains button', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('contains Link', () => {
    expect(wrapper.find('Link')).toHaveLength(1);
  });

  it('contains br', () => {
    expect(wrapper.find('br')).toHaveLength(9);
  });

  it('contains b', () => {
    expect(wrapper.find('b')).toHaveLength(1);
  });

  it('has initial state', () => {
    expect(wrapper.state().name).toEqual('');
    expect(wrapper.state().desc).toEqual('');
  });

  it('changes state', () => {
    wrapper.setState({ name: 'dessert', desc: 'after meals' });
    expect(wrapper.find('[name="name"]').props().value).toEqual('dessert');
    expect(wrapper.find('[name="desc"]').props().value).toEqual('after meals');
  });

  it('has the correct form fields', () => {
    expect(wrapper.find('[name="name"]')).toHaveLength(1);
    expect(wrapper.find('[name="desc"]')).toHaveLength(1);
  });
});
