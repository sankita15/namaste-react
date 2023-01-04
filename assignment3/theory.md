# Assignment 2 Questions

### Ques1. What is NPM?
Ans. It's a package manager but its full form is not node package manager ;) NPM is a package manager for Js programming languages which is maintained by NPM.
We can refer it as world's largest software registry consists for majorly 3 parts
* Website: Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.
* Command Line Interface (CLI): The CLI runs from a terminal, and is how most developers interact with npm.
* Registry: The registry is a large public database of JavaScript software and the meta-information surrounding it.

### Ques2. What is Parcel/Webpack? Why do we need it?
Ans. Parcel/Webpack is a bundler used for bundling the application and also provide a lot of 
other functionalities like HMR, Clean code, code splitting, dev & production build generation, minifying, image optimization, 
caching while development, compression, renaming variable, old browser compatibility, feasibility to run development build with HTTPS,
zero config bundler etc.

### Ques3. What is .parcel-cache?
Ans. .parcel-cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, 
it doesn't have to reparse and re-analyze everything from scratch.

### Ques4. What is npx?
Ans. npx is Node package execute. it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will be installed. 
It is a npm package runner that can execute any package that you want from the npm registry without even installing that package.

### Ques5. What is difference between dependencies vs devDependencies?
Ans. devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

### Ques6. What is Tree Shaking?
Ans. Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
We are using bundlers like webpack/parcels which will take care of removing the dead code when bundling multiple Javascript files into single files. 
This process is important for production ready application to have minifies clean version.
Parcel Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.
Parcel also concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called “scope hoisting”.

### Ques7. What is Hot Module Replacement?
Ans. Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. 
This means that application state can be retained as you change small things. 

Note: Parcel's HMR implementation supports both JavaScript and CSS assets.


### Ques8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

* HMR: By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). 
HMR also improves the developer experience as it does not reload the entire page instead update the modules during runtime.
CSS changes does not require page reload at all and can be updated using HMR. This is also true if you are using framework or library like React and Vue which have inbuilt supports for HMR
```js
if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
  });
}
```
It has 2 methods which takes callback, we can use dispose if we want to save state in the new version of module in the data object.
we can use accept if there is any dependencies or module got updated. We can use the updated value in this method using **module.hot.data**

* Code splitting
* image optimization: Parcel supports resizing, converting, and optimizing images both in dev and prod mode. You can use query parameters when referencing an image in HTML, CSS, or JavaScript to specify which format and size the image should be converted to. You can request multiple sizes or formats from the same source image, which helps support different types of devices or browsers efficiently.
```html
<picture>
  <source type="image/webp" srcset="image.jpg?as=webp&width=400, image.jpg?as=webp&width=800 2x">
  <source type="image/jpeg" srcset="image.jpg?width=400, image.jpg?width=800 2x">
  <img src="image.jpg?width=400" width="400" />
</picture>
```
Parcel also includes lossless image optimization for JPEGs and PNGs by default in production mode, which reduces the size of images without affecting their quality. This does not require any query parameters or configuration to use.

* Minification: Parcel performs minification for HTML, CSS, Js and SVG. It performs minification in various ways like by removing whitespace, 
renaming variables to shorter names, and many other optimizations. By default, it is enabled when building the application but we can suppress it using flag --no-optimize flag.
Parcel uses **terser to minify JavaScript, lightningcss for CSS, htmlnano for HTML, and svgo for SVG**. 
If needed, you can configure these tools using a **.terserrc**, **.htmlnanorc**, or **svgo.config.json** config file.
* zero config bundler

### Ques9. What is .gitignore? What should we add and not add into it?
Ans. .gitignore is the file which keeps track for what needs to be tracked in the version control by pushing it to git. 
We should add all the auto generated file, folders to git ignore as it can be generated on the fly and hence no tracking is required.

### Ques10. What is the difference between package.json and package-lock.json?
Ans. Package.json is the versioning file which keeps track of all the package installed in the project. 
package-lock.json is the file which locks the exact version of the packages getting used in the project.

### Ques11. Why should I not modify package-lock.json?
Ans. You should never modify package-lock.json file as it locks the exact compatible version getting used in the project. 
Modifying this file might create unecessary conflicts between different transitive dependencies in the project. Whenever we need to modify the version for any package, we should do it in package.json or by running npm install specific version command.

### Ques12. What is node_modules ? Is it a good idea to push that on git?
Ans. node_modules is the cache for the external modules that your project depend upon. It includes all the packages required for your project,
and it generates on the fly when you build the project and hence, should not be pushed to git and should be added to .gitignore.


### Ques13. What is the dist folder?
Ans. dist is the production-ready compiled and distributable version of your code. It gets generated when you build your project. 
This compiled code alone is sufficient to serve the application.

### Ques14. What is browserslist?
Ans. browserslist is the library which helps us to define the list of browsers that should be supported by our project.

### Ques15. Difference between ^ - caret and ~ - tilda?
Ans. The tilde matches the most recent minor version (the middle number) but caret will update you to the most recent major version (the first number).

~1.2.3 will match all 1.2.x versions, but it will miss 1.3.0.

^1.2.3 will match any 1.x.x release including 1.3.0, but it will hold off on 2.0.0.

### Ques16. What is different types in script?
Ans. type="module" -> This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. 

type="importmap" -> This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

type="blocking" -> This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking attributes.
