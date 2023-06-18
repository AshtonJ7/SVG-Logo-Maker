// IMPORT

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');
const { SVG, LogoText } = require('./Svg');

//  SVG FILE IN EXAMPLES FOLDER

function init() {
    const exists = fs.existsSync('lib/examples/logo.svg');
    if(exists === true) {
      return;
    }
    fs.mkdirSync('lib/examples/logo.svg')
  }


// QUESTIONS AND ANSWERS USED TO GENERATE SVG IMAGE
class CLI {
    constructor() {

    }
    run() {
        
        return inquirer
        .prompt([
            {
            name: 'shape',
            message: 'What is the shape of your logo?',
            type: 'list',
            choices: ['circle', 'square', 'triangle'],
        },
      
        {
            name: 'shapeColour',
            message: 'What is the color of the shape?',
            type: 'input',
        },
      

        {
            name: 'textForLogo',
            message: 'What is the text? (three character maximum)',
            type: 'input',
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'What colour do you what the text to be?',
          },
    ])
    .then((responses) => {
        const svg = this.generateSVG(responses);

        const markup = svg.render();

            return writeFile("C:/Users/akabo/bootcamp/Student/SVG-Logo-Maker/lib/examples/logo.svg", markup);
            
        })
        .then(() => console.log('Logo has been created'))
        .catch((err) => {
            console.log(err);
            console.log('Something has gone wrong');
        });
    }

    // CREATE SVG USING OPTION CHOICES

    generateSVG(options) {
        const logoText = new LogoText(options.textForLogo, options.textColour);

        switch (options.shape) {
            case "circle":
            const circle = new Circle(options.shapeColour);
            return new SVG(circle, logoText);
            case "square":
            const square = new Square(options.shapeColour);
            return new SVG(square, logoText);
            case "triangle":
            const triangle = new Triangle(options.shapeColour);
            return new SVG(triangle, logoText);
        }
    }
}

// RUN INIT FUNCTION
init();

module.exports = CLI;
