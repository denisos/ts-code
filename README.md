
## run code
`npx ts-node functionstest.ts`

compile to js: `npx tsc functions.ts`


## useful shortcuts
* select variable and then hit cmd+K+I and vscode will show you the type
* type an object variable and then dot after it and you'll see all it's properties listed

notes
* let typescript infer as much as possible
* ts in vscode gives hinting as you type e.g. what params to pass as well as highlighting errors
* reminder ts type checking enforced at compile time only, not at runtime;
  * tsc compiles ts file to js and that's what's used at runtime (with no type checking)
  * especially if js is calling ts code (compiled) then add guard to the ts code
* arrays type is: string[] or Array<string> e.g. const list: Array<number> = [1,3]
* objects: can use special "Record" e.g. const ids: Record<number, string> = { 10: "a"}


## env setup
`yarn add -D typescript`
`yarn add -D ts-node`
`npx tsc --init`
