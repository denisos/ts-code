type Cat = {
  name: string;     // for single prop use: readonly name: string;
  breed: string;
  address: {
    readonly street: string;
  }
}

type ReadOnlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed,
    address: {
      street: "1 Main Street"
    }
  }
}

const tabby = makeCat("tabby", "persian");
// tabby.name = "stabby";   // this is not allowed because object is readonly

// but you can change nested object properties unless you make those properties "readonly"


const reallyConst = [1,2,3] as const;
// reallyConst[2] = 54;   // this is an error since readonly

const anotherWay: Readonly<number[]> = [1,2,4];
// anotherWay[0] = 22;    // this is an error since readonly

type Zoo = {
  cats: Readonly<Cat>[];
}

const myCats: Zoo = { 
  cats: [ 
    { 
      name: "tabster",
      breed: "persian",
      address: {
        street: "22 Main St"
      }

    }
  ] 
}



// cannot do the following since readonly:
myCats.cats[0].name = "slappo";



