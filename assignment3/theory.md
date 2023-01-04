# Assignment 3 Questions

### Ques1. What is JSX?
Ans. JSX is a React extension to the JavaScript language syntax developed by facebook developers which provides a way to structure component rendering using familiar syntax.
JSX is the extension of Javascript. People may also refer it like Javascript XML.
JSX is not equal to HTML inside Js


### Ques2. Superpowers of JSX
Ans. 
* JSX is an Expression Too: After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
* You can provide attributes with JSX just like HTML
* JSX Prevents Injection Attacks: Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

```javascript
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

By default, React DOM escapes(translates) any values embedded in JSX before rendering them. Hence, ensure not to inject anything that's not in the application.

### Ques3. Roles of types attribute in script tag?
Ans. This attribute indicates the type of script represented. The value of this attribute will be one of the following:
* Attribute is not set (default), an empty string, or a JavaScript MIME type
* module: This value makes the code to be treated as Js module. 
The processing of script is delayed and other attributes like defer and charset will not be in effect.
Module scripts require the use of the CORS protocol for cross-origin fetching.
* importmap: The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules

Any other value will be considered as data block and will be ignored by browser.

### Ques4. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent />}
Ans. First one will not display the component. If we have create a React element naming TitleComponent then this way we can render the react element.
Second and third way are same way for rendering the TitleComponent inside JSX
