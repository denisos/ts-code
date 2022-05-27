
function simpleState<T>(initial : T): [() => T, (newState: T) => void] {
  let state: T = initial;

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

const [getClientName, setCustName] = simpleState<string | null>(null);
setCustName("jane")
