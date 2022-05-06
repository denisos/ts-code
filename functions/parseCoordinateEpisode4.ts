interface Coordinate {
  x: number;
  y: number;
}

// ts overloading
function parseCoordinate(obj: Coordinate): Coordinate; 
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(coords: string): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0
  }
  if (typeof arg1 === 'object') {
    coord = {
      ...arg1 as Coordinate
    }
  } else if (typeof arg1 === "string") {
    const coords = JSON.parse(arg1);
    return coords;
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }

  return coord;
}

console.log(parseCoordinate(6,9));
console.log(parseCoordinate({x: 7, y: 22}));
console.log(parseCoordinate('{"x": 13, "y": 15}'));


function fn(x: string): void;
function fn(): void;
function fn(x?: string) {
  console.log(`fn called with: ${x || "nothing"}`);
}
fn();
fn("hello");