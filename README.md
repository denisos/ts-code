
## run code
`npx ts-node functionstest.ts`

compile to js: `npx tsc functions.ts`


## useful shortcuts
* select variable and then hit cmd+K+I and vscode will show you the type
* type an object variable and then dot after it and you'll see all it's properties listed

## notes and reminders
* let typescript infer as much as possible
* ts in vscode gives hinting as you type e.g. what params to pass as well as highlighting errors
* reminder ts type checking enforced at compile time only, not at runtime;
  * tsc compiles ts file to js and that's what's used at runtime (with no type checking)
  * especially if js is calling ts code (compiled) then add guard to the ts code
* arrays type is: string[] or Array<string> e.g. const list: Array<number> = [1,3]
* objects: can use special "Record" e.g. const ids: Record<number, string> = { 10: "a"}
* typescript supports function overloading; write a number of overload signatures followed by the implementation which must match all the overloads (including options and unions). Then write code inside fn to switch on param types.
* exclamation "!" will coalesc

* see Jacks discord channel for interview questions for js and ts


## env setup
`yarn add -D typescript`
`yarn add -D ts-node`
`yarn add -D @types/node`

`npx tsc --init`
