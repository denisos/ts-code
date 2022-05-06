type ThreeDCoord = [ x: number, y: number, z: number];

function addThreeDCoord(c1: ThreeDCoord, c2: ThreeDCoord): ThreeDCoord {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}



function simpleStringState(initial? : any): [() => any, (newState: any) => void] {
  let state = initial;

  return [
    () => state,
    (newState: any) => {
      state = newState;
    }
  ]
}

const [getIsOpen, setIsOpen] = simpleStringState(true)
let mySt = getIsOpen()
console.log("initial state is: ", mySt);

setIsOpen(!mySt);
console.log("after set, state is: ", getIsOpen());
mySt = getIsOpen()
setIsOpen(!mySt);
console.log("after set, state is: ", getIsOpen());


// using string
const [getName, setName] = simpleStringState("Jane")
console.log("initial name is: ", getName());
setName("barak")
console.log("after change barak should be name: ", getName());
