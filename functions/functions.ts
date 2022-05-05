function addNumbers(a: number, b: number): number {
  return a+b
}

export const addStrings = (str1: string, str2: string = "hat"): string => {
  return str1 + str2;
}

export const format = (title: string, param: string | number): string => {
  return `${title} - ${param}`;
}

export const fetchData = (url: string): Promise<string> => Promise.resolve('Data from ${url');

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`;
}

// add checking with optional chaining operator '?' and null coalescing operator
//
export function getName(user: {first: string, last: string}): string {
  return `${user?.first ?? "default first"} - ${user?.last ?? "default first"}`;
}


export default addNumbers;
