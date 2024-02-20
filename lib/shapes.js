
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        // return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        return `<polygon points="150,0 250,200 50,200" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        // return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };