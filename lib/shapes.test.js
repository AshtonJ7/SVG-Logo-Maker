// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");


// TEST TO SEE IF CIRCLE, TRIANGLE, SQUARE AND THE COLOURS ARE RENDERING

describe("Circle", () => {
  test("renders red circle SVG", () => {
      const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red" />'; 
      const circle = new Circle();
      circle.setColor("red");
      const actualSvg = circle.render();
          console.log(actualSvg);
      expect (actualSvg).toEqual(expectedSvg);
  });
});


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


describe("Square", () => {
test("renders blue square SVG", () => {
  const expectedSvg =
  `<rect x="90" y="40" width="120" height="120" fill="blue" />`;
  const square = new Square();
  square.setColor("blue");
  const actualSvg = square.render();
  console.log(actualSvg);
  expect (actualSvg).toEqual(expectedSvg);
});
});