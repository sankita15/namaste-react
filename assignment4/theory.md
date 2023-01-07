# Assignment 4 Questions

### Ques1. Is JSX mandatory for React?
Ans. No, JSX is not mandatory for writing React, but it is suggested to use JSX for having better code readability and clean code.

### Ques2. Is ES6 mandatory for React? 
Ans. No, Es6 is also not mandatory for React, but it is suggested to use Es6 while writing React as it offers a lot of features for writing better code.

### Ques3. How can I write comments in JSX?
Ans. You can use // or /* */ for multi line comments inside {}.

### Ques4. What is React.Fragment or <></>
Ans. React.Fragment gives the power of returning multiple children elements without adding the extra nodes to the DOM as the parent.
<></> is the shorthand for React.Fragment

### Ques5. What is Virtual DOM?
Ans. Virtual DOM is a concept which is a representation of UI kept in memory and synced with real DOM by ReactDOM. This process is called reconciliation.

### Ques6. What is Reconciliation?
Ans. Reconciliation is a process where the virtual DOM is synced with actual DOM by reactDOM. React uses Diffing algorithm for performing reconciliation.
React uses O(n) approach based on 2 assumptions
* Two element of different types will produce different trees.
* devs can use key props which makes child element stable and avoid multiple rendering.

#### The Diffing algorithm
- **Elements Of Different Types**: Different types element will generate 2 different trees at all. 
In such cases root of the old and new tree is compared and if it is different from React will tear down the old tree and create the new one.

When tearing down a tree, old DOM nodes are destroyed. Component instances receive **componentWillUnmount()**.

When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive **UNSAFE_componentWillMount()** and then **componentDidMount()**. Any state associated with the old tree is lost.

- **DOM Elements Of The Same Type**: In such cases where dom element is of same type and only attribute changes then react will only update the changed attribute.
```jsx
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```
only className attribute will be updated in such case.I guess in case of native element and not component.

- **Component Elements Of The Same Type**: When the component element(custom) is same but the props gets changed then the 
instance gets the same and state is maintained across renders. 
```jsx
<CustomComponent prop1="hello" prop2="2022">

<CustomComponent prop1="hello" prop2="2023">
```
In such case, only the prop gets updated and internally React updates it to match the new element, and calls 
**UNSAFE_componentWillReceiveProps()**, **UNSAFE_componentWillUpdate()** and **componentDidUpdate()** on the underlying instance.

- **Recurring On Children without keys and with keys**: Refer next answer


### Ques7. Why do we need keys and when we need it?
Ans. In the diffing algorithm used by React, When there is a change in the child elements considering that same child elements gets added or removed,
this time react will mutate on each and every child which can create performance issue when multiple nodes are involved.
```jsx
//Old one
<ul>
    <li>Holi</li>
    <li>Diwali</li>
</ul>

//New one
<ul>
    <li>New year's eve</li>
    <li>Holi</li>
    <li>Diwali</li>
</ul>
```

In the above example where we add similar children element as before which is li tag, 
React will not realize that Holi and Diwali are the old existing nodes and will reiterate on all three nodes.

In such cases React comes up with providing key attribute to such nodes where elements are same.
```jsx
//Old one
<ul>
    <li key={1}>Holi</li>
    <li key={2}>Diwali</li>
</ul>

//New one
<ul>
    <li key={0}>New year's eve</li>
    <li key={1}>Holi</li>
    <li key={2}>Diwali</li>
</ul>
```
Now, React knows that element with key 0 is the new one and other elements are just moved down.

We need keys to avoid such performance issue which can occur in case of multiple nodes in the application.
Also, we should be careful to add more stable keys instead of random keys or indexes which change a lot.

Now, in the above example if we have added a new img tag instead of li tag then this problem would not have came so keys are required only when same elements needs to be added again.


### Ques8. What is React Fiber?
Ans. The idea behind developing Fiber is to achieve these goals:
* pause work and come back to it later.
* assign priority to different types of work.
* reuse previously completed work.
* abort work if it's no longer needed.

For achieving this we need to breakdown things in unit of work. That's what a fiber is unit of work.
When a function executed a new stack frame gets added in call stack so lets say if rendering is happening then browser if render till that stack frame 
gets completed and hence we cannot do anything there. 
there are new browsers which have `requestIdleCallback` schedules a low priority and `requestAnimationFrame` which have high priority and needs to be
called in next animation frame
So we need to break down things so that if possible we can hold the rendering stack frame and perform the more important task,
but if we depend on call stack, it will keep doing work until the stack is empty.

Fiber is the reimplementation of call stack, specialized for React components. A single fiber can be considered as a virtual stack frame.

for more details: https://github.com/acdlite/react-fiber-architecture

### Ques9. Can we use Index as keys?
Ans. Yes, we can use index as keys, but it is not recommended to use index as keys because if arrays element gets reordered so the indexes, and 
it becomes difficult for react to compare with the old tree and hence react ends up comparing each child element and that key will not be of much use.

Giving keys as index is still better than not giving keys at all.
For more details: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

### Ques10. What is props in React?
Ans. Props are the properties of a React component that can be passed from parent to Child component. 
we can consider it as a attributes of html element but here we can also have custom attributes as props.

### Ques11: What is config Driven UI?
Ans. Controlling UI from backend data coming from API is basically known as config driven ui where we gets config details from backend apis which decides what ui to displays.
e.g., If swiggy is providing offers in city1 but not in city2 the carousel for offers should come only for city 1 and these information ui will get from backend in config form.

