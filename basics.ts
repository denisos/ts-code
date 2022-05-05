let userName: string = "Denis"
let hasLoggedIn: boolean = true;

userName += " Herrington"

console.log(hasLoggedIn)

const users: string[] = userName.split(' ');

const myValues: Array<number> = [1,2]

const myPerson: Person = {
  first: "john",
  last: "smith" 
}

interface Person {
  first: string,
  last: string
}

const ids: Record<number, string> = {
  10: "a",
  20: "b"
}
ids[30] = "c"

if (ids[40] == "d") {
  console.log("40 is d")
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

