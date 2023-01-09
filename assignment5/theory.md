# Assignment 5 Questions

### Ques1. Difference between named export, default export and * as export?
Ans. Named Export: When we have to export multiple values from a file then we can do named export where each export will have a name
and can be used with the same name in different files. For importing named export we have to use below syntax:
```jsx
import { xyz } from '.xyz'
```
Default export: When we have to export single value from a file we can do default export. Same name will be used for importing.
```jsx
import xyz from '.xyz'
```
star as export(* as export): This is also similar to named export but here we can rename the imported data.
```jsx
import * as abc from '.xyz'
```
now we can use **abc.xyz** instead of **xyz**


### Ques2. What is the importance of config.js or constant.js file?
Ans. By introducing such files we achieve modularity and clean code. 
In such files, we can have our data from a separate file keeping the component clean.


### Ques3. What are React hooks?
Ans. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. 
Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: e.g.,

### Ques4. Why do we use useState hook?
Ans. useState is a Hook that lets you add React state to function components, similar to class component.
It is used to manage states and returns a stateful value and an updater function to update it.
