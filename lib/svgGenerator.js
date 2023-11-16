// lib/svgGenerator.js

const fs = require('fs');
const { createSvgString } = require('./svgHelper');

class SvgGenerator {
  constructor(text, textColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
  }

  generateSvg() {
    const svgString = createSvgString(this.text, this.textColor, this.shape);
    
    // Ensure svgString is defined before writing to file
    if (svgString) {
        fs.writeFileSync('logo.svg', svgString);
      } else {
        console.error('Error generating SVG string.');
      }
    }
  }
  
  module.exports = SvgGenerator;