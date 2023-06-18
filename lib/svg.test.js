const {SVG, LogoText} = require("./Svg");
const { Square } = require("./shapes");

// TEST RENDERING OF SVG FILE

TextDecoderStream("should render a 300 x 200 svg element", () => {

    const color = "blue";
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="110" font-size="40" text-anchor="middle" fill="blue">Hi</text></svg>`;

    const square = new Square(color);
    const logoText = new LogoText("Hello World", color);

    const svg = new SVG(square, logoText);
    expectedSvg(svg.render()).toEqual(expectedSvg);

})