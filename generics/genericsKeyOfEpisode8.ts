
// ref: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
// more: https://blog.logrocket.com/how-to-use-keyof-operator-typescript/

function pluck<T, KeyType extends keyof T>(
  items: T[], 
  key: KeyType
) : T[KeyType][] {
  return items.map((item) => item[key])
}

const dogs = [
  { name: "rover", age: 12},
  { name: "lassie", age: 6},
  { name: "fido", age: 1},
]

console.log(pluck(dogs, "name"));

type Point = { x: number; y: number };
type P = keyof Point;   // same as: type P = "x" | "y"
