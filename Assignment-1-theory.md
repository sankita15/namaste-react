# Assignment 1 Questions

### Ques1. What is Emmet?
Ans. Emmet is a plug in for many popular text editors which greatly improves HTML & CSS workflow. You can type short abbreviation, and it generates a boilerplate code for you. 

For more details: https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c#:~:text=%E2%80%9CEmmet%20is%20a%20plug%20in,to%20generate%20HTML%20markup%2C%20CSS.


### Ques2. Difference between Library and Framework?
Ans. **Library:** Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.
By using a library, you can control the flow of the application and call the library.
e.g., JQuery, React JS, etc.

**Framework:** Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.
In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.
e.g., Spring, NodeJS, AngularJS, Vue JS, etc.


### Ques3. What is CDN? Why do we use it?
Ans. A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
We use CDN because of below benefits:
* Improving website load times
* Reducing bandwidth costs: Through caching and other optimizations, CDNs are able to reduce the amount of data an origin server must provide, thus reducing hosting costs for website owners.
* Increasing content availability and redundancy: Its distributed.
* Improving website security

![](./assets/cdn_image.png)

### Ques4. Why is React known as React?
Ans. 


### Ques5. What is crossorigin in script tag?
For enabling the configuration of the CORS requests for the element's fetched data. 
Depending on the element, the attribute can be a CORS settings attribute.

* For crossorigin as anonymous
Request uses CORS headers and credentials flag is set to 'same-origin'. 
There is no exchange of user credentials via cookies, client-side SSL certificates or HTTP authentication, unless destination is the same origin.

### Ques6. What is difference between React and ReactDOM?
Ans. React is a Js library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM. ReactDOM is the bridge between React and DOM.

### Ques7. What is difference between react.development.js and react.production.js files via CDN?
Ans. The very basic difference is that Production Build has ugly, minified(compressed) version of your javascript code, so this makes rendering of file on end user's browser very quick and performance enhancing.
Production builds also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included.

### Ques8. What is the difference between async and defer?
Ans. 
* Default: HTML parsing gets paused as soon as it found script tag and then it started fetching the files for script and then continues with execution. Once script execution finished, html parsing continues.
  * --------HTML Parsing ----------- * --- Fetching files ---* ----- executing files ----- * ---- html parsing conitnues ....
* Async: HTML parsing and fetching file for script happens asynchronously without pausing anyone and as soon as browser encounter script tag, it pauses html parsing and start executing the scripts, once script execution finishes it continues the html parsing.
  * --------HTML Parsing ----------- * --- executing files ---* ---- html parsing conitnues ....

  * ----------- fetching files ----- *
* Defer: HTML parsing and fetching file for script happens asynchronously without pausing anyone and once html parsing gets finished, then script execution starts happening.
  * --------HTML Parsing ----------- * ---- html parsing conitnues ------ * --- executing files ----------*

  * ----------- fetching files ----- *
