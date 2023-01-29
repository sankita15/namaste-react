# Assignment 10 Questions

### Ques1. Explore all the ways of writing css.
Ans. We can write css by 3 ways
* inline css
* class based css -> where we create class names and then have css files to hold styles in that class
* using styles tag -> where we can write css as an object.


### Ques2. How do we configure tailwind?
Ans. We can set up tailwind with parcel by following below link:
https://tailwindcss.com/docs/guides/parcel

once we set it up we will have tailwind.config.js file where we can configure tailwind.


### Ques3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
Ans. 
* content: The content section is where you configure the paths to all of your HTML templates, 
JS components, and any other files that contain Tailwind class names.


* theme: The theme section is where you define your color palette, fonts, type scale, border sizes, 
breakpoints — anything related to the visual design of your site.

* plugins: The plugins section allows you to register plugins with Tailwind that can be used to generate extra 
utilities, components, base styles, or custom variants.
```jsx
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
```

* extend: For extending the default spacing scale, you can do by using the *theme.extend.spacing* section.
```jsx
module.exports = {
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    }
  }
}
```


### Ques4. Why do we have .postcssrc file?
Ans. PostCSS is a JavaScript tool that transforms your CSS code into an abstract syntax tree (AST) and then provides an 
API (application programming interface) for analyzing and modifying it using JavaScript plugins.

So our postcssrc file have tailwindcss plugin which means the css code transformation will also be done using 
tailwind plugin instead of just javascript plugin.
