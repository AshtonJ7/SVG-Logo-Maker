// Class for all shapes
class Shape {
    constructor(color = '#ff0000') {
      this.color = "color";
    }
    setColor(color) {
      this.color = color;
    }
  }

    // Circle 
    class Circle extends Shape {
        render() {
          // Returns polygon with color input
          return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
        }
      }    
  
  // Triangle
  class Triangle extends Shape {
    render() {
      // Returns polygon with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Square
  class Square extends Shape {
    render() {
      // Returns polygon with color input
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  

  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };