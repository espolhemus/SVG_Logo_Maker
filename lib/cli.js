const inquirer = require('inquirer');
const SVG = require('./svg');
const { Circle, Square, Triangle } = require('./shapes');
const { writeFile } = require('fs/promises');
const path = require('path');

function validateColor(input) {
    // Regular expression to match valid color keywords
    const colorKeywords = ['red', 'blue', 'green', 'yellow', 'purple', 'white']; // Add more color keywords as needed
    const colorHexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // Regular expression for valid hexadecimal colors

    if (colorKeywords.includes(input.toLowerCase()) || colorHexRegex.test(input)) {
        return true; // Input is a valid color
    } else {
        return 'Please enter a valid color keyword or hexadecimal value.';
    }
}

class CLI {
    run(){
        return inquirer
        .prompt([
            {
                name: 'logoText',
                type: 'input',
                message: 'Please provide the text to be included on the logo (no more than 3 characters.)',
                validate: function(input) {
                    if (input.length <= 3) {
                      return true;
                    } else {
                      return 'Logo text must be 3 characters or less.';
                    }
                  }
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'Please specify a color for the text.',
                validate: validateColor
            },
            {
                name: 'logoShape',
                type: 'list',
                message: 'What shape would you like to use for the logo?',
                choices: ['Circle', 'Square', 'Triangle'],
                // validate: function(input) {
                //     if (this.choices.includes(input)) {
                //       return true;
                //     } else {
                //       return 'Please select a valid shape from the list.';
                //     }
                //   }
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'Please specify a color for the shape.',
                validate: validateColor
            }
        ])
        .then((answers) => {
            // perform logical test to determine which shape to use
            let shape;
            if (answers.logoShape === 'Circle') {
                shape = new Circle();
            }
            else if (answers.logoShape === 'Square') {
                shape = new Square();
            }
            else {
                shape = new Triangle();
            }

            // set the color of the shape
            shape.setColor(answers.shapeColor);



            // create a new SVG object
            const svg = new SVG();
            svg.setText(answers.logoText, answers.textColor);
            svg.setShape(shape);
            
            // set the location to which the file will be written
            const filePath = path.join(__dirname, '..', 'examples', 'logo.svg');
            
            // return the SVG object and write it to a file
            return writeFile(filePath, svg.render());
        }
        )
            // if successful, log a message to the console
        .then(() => {  
            console.log('Generated logo.svg.');
        })
        // if an error occurs, log the error to the console
        .catch((err) => {
            console.log(err);
            console.log('Error. Logo creation failed.');
        });
    }
 }

module.exports = CLI;