import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new Adapter() });

const axiosMock = new MockAdapter(axios);

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.axiosMock = axiosMock;
