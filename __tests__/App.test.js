/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from "enzyme";
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders StatusBar', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('StatusBar')).toHaveLength(1);
});
