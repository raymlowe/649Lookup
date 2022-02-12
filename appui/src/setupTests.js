// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import App from "./App";
import { render, screen } from '@testing-library/react';
configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Lotto Draw</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});