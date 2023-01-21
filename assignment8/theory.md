# Assignment 7 Questions

### Ques1. What are various ways to add images into our app? Explain with examples.
Ans. 
First way
```jsx
import logo from './assets/logo.png';

<img src={logo}/>
```

second way
```jsx
import * as mainLogo from './assets/logo.png';

<img src={mainLogo}/>
```


### Ques2. What would happen if we do console.log(useState())?
Ans. useState returns an array with the state initial value and a setter function. In the above question we did not 
provide anything as initial value so it will be undefined and we will get a function along with undefined which has a 
name bound setState.
It will log [undefined, f()]


### Ques3. How will useEffect behave if we do not provide any dependency array?
Ans. If we do not pass dependency array in useEffect then it will run each time component renders ie., each time 
whenever there is stat change, component will re-render and hence useEffect will run.


### Ques4. What is SPA?
Ans. A single page application is a website or web application that dynamically rewrites a current web page with new 
data from the web server, instead of the default method of a web browser loading entire new pages.

An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates 
the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content 
is to be shown.


### Ques5. Difference between client side and server side routing?
Ans. with server-side routing you download an entire new webpage whenever you click on a link, with client-side routing 
the webapp downloads, processes and displays new data for you.

#### Server-side
When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, 
which in turn will request a new page from the server. This is what we call a server-side route. A whole new document 
is served to the user.

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which 
responds with a new document, completely discarding the old page altogether.


#### Client-side
A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When 
a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will 
result in a changed state of the application. The changed state will ultimately result in a different view of the 
webpage. This could be the rendering of a new component, or even a request to a server for some data that the 
application will turn into some HTML elements.

It is important to note that the whole page won’t refresh when using client-side routing. There are just some 
elements inside the application that will change.
