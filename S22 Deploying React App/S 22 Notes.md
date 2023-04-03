V. 327 Lazy Loading 
- Optimizing the loading of code

What is Lazy Loading & How does it work? 
- load code only when it is needed

How is the application & code built without lazy loading
- with import statements we load code from other files into the file which has the import statement. 
- when the application is served to the end user all the imports in the files must be resolved before anything is show on the page to the user

V. 328 Adding Lazy Loading to our Application 
- the imports are adjusted so that the imports are only loaded as needed. 

V. 329 Building the Code for Production
- npm run build 
  - provides an optimized transformed build ready to be uploaded to a server 

V. 330 Deployment
- A React SPA is a static website (only html, css, js)
- only need a static site host
attaching the project 
- init from project root
  - this is the BUILD folder 
  - you will need to rewrite all urls to index.js 

V. 331 Configuration for a SPA and deployment
- react router dom = client side execution
- forward all url requests to index.html