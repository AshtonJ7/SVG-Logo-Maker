const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs/promises');
const { LogoText, SVG } = require('./svg');
const { questions } = require('./questions');
const { response } = require('express');

class CLI {
    contructor() {

    }
    run() {
        
        return inquirer
        .prompt(questions)
        .then((responses) => {

            const svg = this.generateSVG(responses);

            const markup = svg.render();

            return writeFuke("logo.svg", markup);
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
            return new SVG(circle, logoText);
            case "triangle":
            const triangle = new Triangle(options.shapeColour);
            return new SVG(circle, logoText);
        }
    }
}

module.exports = CLI;