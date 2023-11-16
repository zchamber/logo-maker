// lib/svgHelper.js

function createSvgString(text, textColor, shape) {
  // Function to create SVG string based on user input

  const shapeSvgString = shape.getSvgString();

    // Get the dimensions of the shape to dynamically calculate the center
    const shapeWidth = shape.getWidth();
    const shapeHeight = shape.getHeight();
  
    // Calculate the x position for centering the text within the shape
    const textX = shapeWidth / 2;
    const textY = shapeHeight / 2;

    // Example: Creating a simple SVG string with a text element and a shape
    const svgString = `
    <svg width="${shapeWidth}" height="${shapeHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/> <!-- Background rectangle to cover the entire SVG canvas -->
      ${shapeSvgString}
      <text x="${textX}" y="${textY}" fill="${textColor}" font-size="50" text-anchor="middle" dy=".5em">${text}</text>
    </svg>
  `;

  return svgString;
}



module.exports = { createSvgString };