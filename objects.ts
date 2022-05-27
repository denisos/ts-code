interface Box {
  contents: unknown;
}

let x: Box = {
  contents: "hello there"
}

if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase())
}

// instead of that ^, better is to use generics
// https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types

interface TypedBox<T> {
  contents: T;
}

let y: TypedBox<string> = {
  contents: "hello there string typed box"
}

let z: TypedBox<number> = {
  contents: 45
}

console.log(z.contents)


// can also make a generic setter
function setContents<T>(abox: TypedBox<T>): TypedBox<T> {
  console.log("setContents ", abox);
  return abox;
}

setContents(y);


//
type OneOrMany<Type> = Type | Type[];

// you can declare read only arrays using special ReadonlyArray type
//  can't use push/pop etc.
let myReadOnlyArr: ReadonlyArray<number> = [1,2,3];

// can also write as:
let myOtherReadOnlyArr: readonly number[] = [1,2,3];


// tuples can be typed like so
type StringNumberPair = [string, number];

function myTupleTaker(tuple: StringNumberPair): null {
  return null
}

myTupleTaker(["name", 21])


// object literals...probably best is Record (see below) which is built for it
// "Constructs an object type whose property keys are Keys and whose property values are Type"

// ok
const cats: Record<string, string> = {
  "tabby": "persian",
  "fluffy": "ragamuffin"
}

// better
interface CatType {
  name: string;
  breed: string;
}

const typedcats: Record<string, CatType> = {
  "tabby": {name: "tabby", breed: "persian"},
  "fluffy": {name: "fluffy", breed: "persian"},
}


// interesting, but just use Record instead
interface ObjLiteral<T> {
  [key: string]: T;
}

let myObjLit: ObjLiteral<string> = { 
  'so': 'soloist,software',
  'sof': 'software',
  'soft': 'software'
}
