# Assignment 11 Questions

### Ques1. What is prop drilling?
Ans. Prop drilling is a situation where data is passed from one component through multiple 
interdependent components until you get to the component where the data is needed.


### Ques2. What is lifting the state up?
Ans. Lifting the state up means moving the state from child component to the closest common ancestors so that state can 
be shared across siblings.


### Ques3. What is Context Provider and Context Consumer?
Ans. Context Provider: The provider is used to create a context that can be consumed.
The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. 
One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

Context Consumer: The consumer is used to consume the nearest provided context.
A React component that subscribes to context changes. Using this component lets you subscribe to a context 
within a function component.


### Ques4. If you don’t pass a value to the provider does it take the default value?
Ans. Yes, if we don't pass the value to provider its picks up the default value.
