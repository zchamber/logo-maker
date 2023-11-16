// index.js

const readlineSync = require('readline-sync');
const { Triangle, Circle, Square } = require('./lib/shapes');
const SvgGenerator = require('./lib/svgGenerator');

function getUserInput() {
  const text = readlineSync.question('Enter up to three characters for the text: ').slice(0, 3);
  const textColor = readlineSync.question('Enter text color (color keyword or hexadecimal number): ');
  
  console.log('Choose a shape:');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shapeType = readlineSync.keyInSelect(shapeOptions, 'Select a shape:');

  if (shapeType === -1) {
    console.log('Process aborted.');
    process.exit(0);
  }

  const shapeColor = readlineSync.question('Enter shape color (color keyword or hexadecimal number): ');

  return { text, textColor, shapeType: shapeOptions[shapeType], shapeColor };
}

function runLogoGenerator() {
  const userInput = getUserInput();
  const { text, textColor, shapeType, shapeColor } = userInput;

  let shape;

  switch (shapeType.toLowerCase()) {
    case 'circle':
      shape = new Circle(shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(shapeColor);
      break;
    case 'square':
      shape = new Square(shapeColor);
      break;
    default:
      console.log('Invalid shape type.');
      return;
  }

  const svgGenerator = new SvgGenerator(text, textColor, shape);
  svgGenerator.generateSvg();

  console.log('Generated logo.svg');
}

runLogoGenerator();