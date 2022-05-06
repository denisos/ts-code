// reduce to reproduce forEach, map, filter using reduce and have to be type safe

// forEach - iterate over list and call callback passing item, index and array
// map is same as forEach but returns a new array built with result of callback
// filter 

function oneReduceToRuleThemAll<T, K>(
  list: T[], 
  callback: (i: T, index: number, list: T[]) => boolean | T | K | void 
  ) : K[] | T[] | undefined
{
  let shouldReturn = false;

  let result = list.reduce((accum: T[] | K[], curr: T, currIndex: number, currList: T[]) => {
    let newItem: boolean | T | K | void = callback(curr, currIndex, currList);

    if (newItem) {
      accum.push((typeof newItem === 'boolean') ? curr as any: newItem);
      shouldReturn = true;
    }

    return accum;
  }, []);

  return (shouldReturn) ? result :  undefined;
}

// Jack wrote 3 separate functions (versus my 1), here's his example of map
//  note the K type recognizing that the type may be mutated from T (which I did not originally accommodate)
//
function myMap<T, K>(items: T[], mapFunc: (item: T) => K): K[] {
  return items.reduce(
    (a, v) => [...a, mapFunc(v)], 
    [] as K[]);
}


const oList = [1,3,5,7,9];

console.log("map expect [1,9,25,49,81]",
  oneReduceToRuleThemAll(oList, (item) => item * item)
)

console.log("filter expect [5,7,9]",
  oneReduceToRuleThemAll(oList, (item) => item >= 5)
)

console.log("foreach expect undefined",
  oneReduceToRuleThemAll(oList, (item, index) => { 
    console.log(item, index)
  })
)



