class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }

}

class Triangle extends Polygon {
    //constructor(triSides) {

    // }
}


class Square extends Polygon {
    /*constructor(squSides) {
        if (squSides > 0) {
            this.squSides = squSides;
        } else {
            return false;
        }
    }

    get squSides() {
        this.squSides = Math.sqrt(this.squSides)
    }

*/
}





