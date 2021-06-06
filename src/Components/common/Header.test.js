import React from 'react';
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Typography, Button } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';
import Header from './Header';


configure({ adapter: new Adapter() })

describe('Header Testing', () => {

  let shallow, wrapper;
  beforeEach(() => {  // This is Mocha; in Jest, use beforeAll
    shallow = createShallow();
    wrapper = shallow(<Header />);
  });

  test("render the header component", () => {
    // const wrapper = shallow(<Header />);
    expect(wrapper.find(Typography).text()).toContain("Album App");
    expect(wrapper.find(Button).text()).toContain("Login");
  })

  // test("render iconbutton", () => {
  //   // const wrapper = shallow(<Header />);
  //   // console.log("debug is ", wrapper.debug())
  //   console.log(wrapper.find('.makeStyles-menuButton-2').text());
  //   // expect(wrapper.find('.makeStyles-menuButton-2').text()).toContain("Login");
  // })
})



// describe('Header Testing', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow('<Header />')
//   });

//   test("render the title of the component", () => {
//     expect(wrapper.find(Typography).text()).toContain("Album App");
//     expect(wrapper.find(Button).text()).toContain("Login");
//   });

//   test("render iconbutton", () => {
//     console.log(wrapper.find('.menuButton').debug());
//     expect(wrapper.find('.makeStyles-menuButton-2').text()).toContain("Login");
//   });
// })