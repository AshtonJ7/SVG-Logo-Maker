// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

describe("Circle", () => {
  test("renders red circle SVG", () => {
      const expectedSvg = '<circle cx="150" cy="115" r="80" fill="red" />'; 
      const circle = new Circle();
      circle.setColor("red");
      const actualSvg = circle.render();
          console.log(actualSvg);
      expect (actualSvg).toEqual(expectedSvg);
  });
});

// Tests to see if triangle and colour options are rendering correctly
describe("Triangle", () => {
test("renders yellow triangle SVG", () => {
  const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'; 
  const triangle = new Triangle();
  triangle.setColor("yellow");
  const actualSvg = triangle.render();
  console.log(actualSvg);
  expect (actualSvg).toEqual(expectedSvg);
});
});

// Tests to see if square and colour options are rendering correctly
describe("Square", () => {
test("renders blue square SVG", () => {
  const expectedSvg =
  `<rect x="73" y="40" width="160" height="160" fill="blue" />`;
  const square = new Square();
  square.setColor("blue");
  const actualSvg = square.render();
  console.log(actualSvg);
  expect (actualSvg).toEqual(expectedSvg);
});
});