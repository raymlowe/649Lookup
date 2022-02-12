// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { utils } from '../../utils';


const resultObject = {
  "id": "b5c3ad76-20cb-42e0-a5e8-5bd2dfdccaa5",
  "product": "649",
  "draw_number": "3969",
  "sequence_number": "0",
  "draw_date": "2022-02-02T08:00:00.000Z",
  "number_drawn_1": 3,
  "number_drawn_2": 7,
  "number_drawn_3": 9,
  "number_drawn_4": 23,
  "number_drawn_5": 26,
  "number_drawn_6": 32,
  "bonus_number": 42
};

it("score for one number match should be 0", () => {
  const userNumbers =
    [
      "4",
      "8",
      "15",
      "16",
      "23",
      "42"
    ]
  let score = utils.numberMatcher(resultObject, userNumbers);
  expect(score).toEqual(0);
});

it("score for two numbers and bonus should be 0", () => {
  const userNumbers =
    [
      "4",
      "9",
      "15",
      "16",
      "23",
      "42"
    ]
  let score = utils.numberMatcher(resultObject, userNumbers);
  expect(score).toEqual(8);
});

it("score for six numbers and bonus should be 6", () => {
  const userNumbers =
    [
      "3",
      "7",
      "9",
      "26",
      "23",
      "32"
    ]
  let score = utils.numberMatcher(resultObject, userNumbers);
  expect(score).toEqual(6);
});
