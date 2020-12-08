class Circle {
    constructor(radius, sides) {
        this.radius = radius;
        this.sides = sides;
    }
    circle_area() {
        return 3.14*(this.radius ** 2);
    }
    total_sides() {
        return 'A circle has no sides.';
    }
}

const smallCircle = new Circle(1, 1);
const mediumCircle = new Circle(3, 0);
const largeCircle = new Circle(5, 0);

console.log(smallCircle.total_sides()); // A circle has no sides.
console.log(smallCircle.circle_area()); // 3.14
console.log(mediumCircle.circle_area()); // 28.26
console.log(largeCircle.circle_area()); // 78.5

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sides = arguments.length;
    }
    rectangle_area() {
        return this.width * this.height;
    }
    total_sides () {
        return `This rectangle has ${this.sides * 2} sides.`;
    }
}

const smallRectangle = new Rectangle(1, 1);
const mediumRectangle = new Rectangle(3, 3);
const largeRectangle = new Rectangle(5, 5);

console.log(smallRectangle.total_sides()); // This rectangle has 4 sides.
console.log(smallRectangle.rectangle_area()); // 1
console.log(mediumRectangle.rectangle_area()); // 9
console.log(largeRectangle.rectangle_area()); // 25

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.length = length;
        this.sides = arguments.length;
    }
    square_area() {
        return this.length * this.length;
    }
    total_sides() {
        return `This square has ${this.sides * 4} sides.`;
    }
}

const smallSquare = new Square(1);
const mediumSquare = new Square(3);
const largeSquare = new Square(5);

console.log(smallSquare.total_sides());
console.log(smallSquare.square_area());
console.log(mediumSquare.square_area());
console.log(largeSquare.square_area());