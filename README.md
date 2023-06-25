# SVG-Logo-Maker
This is an Application that takes in user inputed data to generate a logo and save it as an SVG image to an external site.

## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Tech

- Javascript 
- NODE.JS
- NPM JEST
- NPM inquirer

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Demonstration Video

[screen-recorder.webm](https://github.com/AshtonJ7/SVG-Logo-Maker/assets/62944042/3f2786a2-308c-4c96-91ec-1fea9057ecdf)

## Screenshot

![image](https://github.com/AshtonJ7/SVG-Logo-Maker/assets/62944042/18d77ef7-e701-40b6-b7de-09eaafc21175)

