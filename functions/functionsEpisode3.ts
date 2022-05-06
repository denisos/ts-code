// Episode 3
// functions passed to and returned from functions

export function printToFile(text: string, callback: () => void): void {
  console.log(text);

  callback();
}

type MutationFuncton = (num: number) => number

export function arrayMutate(numbers: number[], mutate: MutationFuncton) : number[] {
  return numbers.map(mutate)
} 

console.log(arrayMutate([1,2,3], (num) => num * num ))

function createAddr(num: number): (...args: number[]) => number {
  return (...args: number[]) => {
    return args.reduce((sum: number, argnum: number) => {
      return sum += argnum;
    }, num)
  }
}

const fiveAddr = createAddr(5);
console.log(fiveAddr(6))
console.log(fiveAddr(10, 20, 30))
