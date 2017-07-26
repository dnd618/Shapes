class Shapes {
    constructor(width, height, radius, side) {
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.sides = sides;
        this.perimeter = perimeter;
    }
}

class Circle extends Shapes {
  constructor(radius) {
        super(radius);
            this.hasRadius = true;
  }
}

class Square extends Shapes {
    constructor(sides) {
        super(sides);
            this.hasSides = true;
    }
}

class Rectangle extends Shapes {
    constructor(width, height) {
        this.width = true;
        this.height = true;
    }
}

class Triangle extends Shapes {
    constructor(height) {
        this.height = true;
    }
} 