
function simpleState<T>(initial? : T): [() => T | undefined, (newState: T) => void] {
  let state: T | undefined = initial;

  return [
    () => state,
    (newState: T) => {
      state = newState;
    }
  ]
}

const [getCount, setCount] = simpleState(10);
console.log(getCount());
setCount(55);
console.log(getCount());

