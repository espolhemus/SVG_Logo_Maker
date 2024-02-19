const inquirer = require('inquirer');
// const { Circle } = require('../../../ClassRepository/UofM-VIRT-FSF-PT-08-2023-U-LOLC-ENTG/10-OOP/02-Challenge/Main/lib/shapes');

function validateColor(input) {
    // Regular expression to match valid color keywords
    const colorKeywords = ['red', 'blue', 'green', 'yellow', 'purple']; // Add more color keywords as needed
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
                validate: function(input) {
                    if (this.choices.includes(input)) {
                      return true;
                    } else {
                      return 'Please select a valid shape from the list.';
                    }
                  }
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'Please specify a color for the shape.',
                validate: validateColor
                
            }
        ])
        // .then(({ logoText, textColor, logoShape, shapeColor }) => {
        //     if (logoShape === 'Circle') {
        //         new Circle().setColor(shapeColor);
        //     } else if (logoShape === 'Square') {
        //         new Square().setColor(shapeColor);
        //     } else {
        //         new Triangle().setColor(shapeColor);
        //     }
        //     return { logoText, textColor, logoShape, shapeColor };
        // });
    }
}
module.exports = CLI;