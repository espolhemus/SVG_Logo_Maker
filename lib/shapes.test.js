const { Circle, Square, Triangle } = require('./shapes');
const triangle = new Triangle();
const circle = new Circle();
const square = new Square();
triangle.setColor('blue');
circle.setColor('red');
square.setColor('#00FF00');

test('Triangle render method should return SVG markup with blue color', () => {
  expect(triangle.render()).toEqual('<polygon points="150,0 250,200 50,200" fill="blue" />');
});

test('Circle render method should return SVG markup with red color', () => {
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
});

test('Square render method should return SVG markup with #00FF00 (green) color', () => {
    expect(square.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="#00FF00" />');
  });