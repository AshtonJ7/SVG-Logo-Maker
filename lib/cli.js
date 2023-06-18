const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');
const { LogoText, SVG } = require('./svg');
const fs = require('fs');

function init() {
    const exists = fs.existsSync('lib/examples/logo.svg');
    if(exists === true) {
      return;
    }
    fs.mkdirSync('lib/examples/logo.svg')
  }



class CLI {
    contructor() {

    }
    run() {
        
        return inquirer
        .prompt([
            {
            name: 'shape',
            message: 'What is the shape of your logo?',
            type: 'list',
            choices: ['Circle', 'Square', 'Triangle'],
        },
         //SHAPE COLOUR
        {
            name: 'shapeColour',
            message: 'What is the color of the shape?',
            type: 'input',
        },
      
        // TEXT
        // validate user can only submit 3 characters
        {
            name: 'logotext',
            message: 'What is the text? (three character maximum)',
            type: 'input',
        },
    ])
        .then((responses) => {

            // generatesvg
            const svg = this.generateSVG(responses);

            const markup = svg.render();

            return writeFile("lib/examples/logo.svg", markup);
        })
        .then(() => console.log('Logo has been created!'))
        .catch((err) => {
            console.log(err);
            console.log('Something has gone wrong');
        });
    }
    generateSVG(options) {
        const logoText = new LogoText(options.text, options.textColour);

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


init();
module.exports = CLI;
