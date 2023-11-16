// lib/shapes.js

class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    getWidth() {
      // For simplicity, let's assume the width is the distance between the leftmost and rightmost points
      // Adjust this based on how you define the width of a triangle in your application
      return 190; // Example value, replace with your logic
    }
  
    getHeight() {
      // For simplicity, let's assume the height is the vertical distance between the topmost and bottommost points
      // Adjust this based on how you define the height of a triangle in your application
      return 190; // Example value, replace with your logic
    }
  
    getSvgString() {
      return `<polygon points="100,0 0,190 190,190" fill="${this.color}"/>`;
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    getDiameter() {
      // For simplicity, let's assume the diameter is twice the radius
      // Adjust this based on how you define the diameter of a circle in your application
      return 200; // Example value, replace with your logic
    }
  
    getWidth() {
      // For a circle, the width is the same as the diameter
      return this.getDiameter();
    }
  
    getHeight() {
      // For a circle, the height is the same as the diameter
      return this.getDiameter();
    }
  
    getSvgString() {
      return `<circle cx="100" cy="100" r="80" fill="${this.color}"/>`;
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    getWidth() {
      // Adjust this based on how you define the width of a square in your application
      return 200;
    }
  
    getHeight() {
      // Adjust this based on how you define the height of a square in your application
      return 200; 
    }
  
    getSvgString() {
      return `<rect width="200" height="200" fill="${this.color}"/>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };