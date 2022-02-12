// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { expect, it } from '@jest/globals';
import '@testing-library/jest-dom';
import { describe } from 'yargs';
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

it("score for two numbers and bonus should be 8", () => {
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

it("score for six numbers should be 6", () => {
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

it("score for five numbers and bonus should be 8", () => {
  const userNumbers =
    [
      "3",
      "7",
      "9",
      "23",
      "26",
      "42"
    ]
  let score = utils.numberMatcher(resultObject, userNumbers);
  expect(score).toEqual(8);
});

it("score for one number should be 0", () => {
  const userNumbers =
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ]
  let score = utils.numberMatcher(resultObject, userNumbers);
  expect(score).toEqual(0);
});

// describe("testing the scoring function", () => {
//   it("a score of 0 should return $0", () =>{
//     let amount = utils.getAmountByScore(0)
//     expect(amount).toEqual(0);
//   });
//   it("a score of 1 should return $0", () =>{
//     let amount = utils.getAmountByScore(0)
//     expect(amount).toEqual(0);
//   });
//   it("a score of 1 should return $0", () =>{
//     let amount = utils.getAmountByScore(1)
//     expect(amount).toEqual(0);
//   });
//   it("a score of 2 should return $3", () =>{
//     let amount = utils.getAmountByScore(2)
//     expect(amount).toEqual(3);
//   });
//   it("a score of 3 should return $10", () =>{
//     let amount = utils.getAmountByScore(3)
//     expect(amount).toEqual(10);
//   });
//   it("a score of 4 should return $85", () =>{
//     let amount = utils.getAmountByScore(4)
//     expect(amount).toEqual(85);
//   });
//   it("a score of 5 should return $3000", () =>{
//     let amount = utils.getAmountByScore(5)
//     expect(amount).toEqual(3000);
//   });
//   it("a score of 6 should return $5000000", () =>{
//     let amount = utils.getAmountByScore(6)
//     expect(amount).toEqual(5000000);
//   });
//   it("a score of 8 should return $5", () =>{
//     let amount = utils.getAmountByScore(8)
//     expect(amount).toEqual(5);
//   });
//   it("a score of 9 should return $250000", () =>{
//     let amount = utils.getAmountByScore(9)
//     expect(amount).toEqual(250000);
//   });
// });

//not sure why that describe block isn't executing so...

it("a score of 0 should return $0", () =>{
  let amount = utils.getAmountByScore(0)
  expect(amount).toEqual(0);
});
it("a score of 1 should return $0", () =>{
  let amount = utils.getAmountByScore(0)
  expect(amount).toEqual(0);
});
it("a score of 1 should return $0", () =>{
  let amount = utils.getAmountByScore(1)
  expect(amount).toEqual(0);
});
it("a score of 2 should return $3", () =>{
  let amount = utils.getAmountByScore(2)
  expect(amount).toEqual(3);
});
it("a score of 3 should return $10", () =>{
  let amount = utils.getAmountByScore(3)
  expect(amount).toEqual(10);
});
it("a score of 4 should return $85", () =>{
  let amount = utils.getAmountByScore(4)
  expect(amount).toEqual(85);
});
it("a score of 5 should return $3000", () =>{
  let amount = utils.getAmountByScore(5)
  expect(amount).toEqual(3000);
});
it("a score of 6 should return $5000000", () =>{
  let amount = utils.getAmountByScore(6)
  expect(amount).toEqual(5000000);
});
it("a score of 8 should return $5", () =>{
  let amount = utils.getAmountByScore(8)
  expect(amount).toEqual(5);
});
it("a score of 9 should return $250000", () =>{
  let amount = utils.getAmountByScore(9)
  expect(amount).toEqual(250000);
});
