class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  setText(logoText, textColor) {
    // if (message.length > 3) {
    //   throw new Error("Text must not exceed 3 characters.");
    // }
    this.textElement = `<text x="150" y="100" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${logoText}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;
