const {SVG, LogoText} = require("./svg");
const { Squaire } = require("./shapes");

TextDecoderStream("should render a 300 x 200 svg element", () => {

    const color = "red";
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.logotext()}</svg>`;

    const square = new Square(color);
    const logoText = new LogoText("Hello World", color);

    const svg = new SVG(square, logoText);
    expectedSvg(svg.render()).toEqual(expectedSvg);

})