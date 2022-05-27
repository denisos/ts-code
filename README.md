# introduction
Been using typescript for a number of years. But wanted to go through Jack Herringtons great "No BS TS" course from scratch (2nd start). This repo is follow along to all his videos and challenges.

The [typescipt handbook](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) is a comprehensive reference, but Jack distills and teaches.

## run code
`npx ts-node functionstest.ts`   // compile and run

`npx tsc functions.ts`           // compile to js only


## useful shortcuts
* select variable and then hit cmd+K+I and vscode will show you the type
* type an object variable and then dot after it and you'll see all it's properties listed
* cmd + space when filling in fn or object shows possible choices based on type definition

## notes and reminders
* let typescript infer as much as possible
* ts in vscode gives hinting as you type e.g. what params to pass as well as highlighting errors
* reminder ts type checking enforced at compile time only, not at runtime;
  * tsc compiles ts file to js and that's what's used at runtime (with no type checking)
  * especially if js is calling ts code (compiled) then add guard to the ts code
* arrays type is: string[] or Array<string> e.g. const list: Array<number> = [1,3]
* objects: can use special "Record" e.g. const ids: Record<number, string> = { 10: "a"}
* "type guard" a conditional to check the type e.g. typeof p1 === 'boolean'
  * "narrowing" - refining types to more specific types; 
     * checking truthiness is narrowing, checking equality is narrowing, in operator is narrowing
* typescript supports function overloading; write a number of overload signatures followed by the implementation which must match all the overloads (including options and unions). Then write code inside fn to switch on param types.
* exclamation "!" is a non null assertion; it will coalesc, but prefer to avoid ! and use optional chaining instead (for example) OR discrinimated unions
* readonly: can use readonly on property of type or "Readonly" built in ts utility type or as const
  * e.g. type ReadOnlyCat = Readonly<Cat>
  * e.g. const reallyConst = [1,2,3] as const;  // this makes immutable array
    * 
* generics are fundamental to ts 
  * can set generic type when declare e.g. simpleState<string | null>(null);


* see Jacks discord channel for interview questions for js and ts


## env setup
`yarn add -D typescript`

`yarn add -D ts-node`

`yarn add -D @types/node`

`npx tsc --init`

