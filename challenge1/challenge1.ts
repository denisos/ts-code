const houses = require('./houses.json');

// see this gist: https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c
// need to implement findHouses to match all overloads and define the interfaces

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(houses: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
  let theHouses = (typeof houses === 'string') ? JSON.parse(houses) : houses;

  return (!filter ? theHouses : theHouses.filter(filter)).map((ahouse: House) => ({ 
    ...ahouse, 
    id: theHouses.indexOf(ahouse)
  }));
}

console.log("Harkonnen house ", findHouses(houses, ({ name }) => name === "Harkonnen"));

console.log("Nonsense house ", findHouses(houses, ({ name }) => name === "Nonsense"));

console.log("Atreides house ",
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
