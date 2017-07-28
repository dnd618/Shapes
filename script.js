

class Shapes {
    constructor(width, height, radius, side) {
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.sides = sides;
        this.area = area;
    }
}

class Circle extends Shapes {
  constructor(radius) {
        super(radius);
            this.hasRadius = true;
  }
}

class Square extends Shapes {
    constructor() {
        super(sides);
            this.hasSides = true;
    }
}

class Rectangle extends Shapes {
    constructor() {
        this.width = width;
        this.height = height;
    }
}


  // note: NO comma needed
  get area() {
    return this.width * this.height;
  }

  // public static getter
  // reachable through
  // Rectangle.SHAPE
  static get SHAPE() {
    return 'Rectangle';
  }

}

class Triangle extends Shapes {
    constructor() {
        this.height = true;
    }
} 

let Shapes = function() { };
   
  Shape.prototype = {
    // x: 30,
    // y: 30,
    width: 25,
    height: 25,
     
    draw: function(ctx) {
      throw new Error("This is parent method");
    },
     
    print: function() {
      console.log(this.width + '<>' + this.height);
    }
  };
  //this.x + ':' + this.y + ' ' + --cut from print function

  var Circle = function() { this.radius = 20; };
  Circle.prototype = new Shape();
  Circle.prototype.draw = function(ctx) {
    ctx.arc(12, 22, 66, 0, 2 * Math.PI, false);
  };


//In class example
class Shapes {
    constructor(width, height, radius, side) {
        this.shape = document.createElement('div');
        this.shape.className = 'Triangle';
            document.body.appendChild(Circle);
//create draw function
class Triangle extends Shapes {
    constructor(height) {
        super('Triangle');
        this.draw
    }
}
};


