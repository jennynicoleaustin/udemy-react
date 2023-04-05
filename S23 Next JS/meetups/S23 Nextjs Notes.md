V. 347 
- files places in the pages folder will be rendered with url route names that match the file name 
- files NOT in the pages folder are treated like regular React js files. 

V. 349 
_app.js
- acts as the root element/ components 
  - receives props and uses object destructing to pull info from the props
    - elements available from object destructing? 
      - Component prop and page prop
  - Component holds the actual content to be rendered by next 
  - pages = any props that the pages may be getting. 

If you have an element you want wrapped around all pages include it on the _app.js file 

V. 350 
- router.push 
  - pushes a page onto the stack 
    - equivalent to using a Link 

V. 352
- useEffect and pre-rending data. 
  - since next js pre-renders data it will use the first state to render the page, so if it is an empty array etc, viewing the source data you will not see the rendered data, which is not the behavior we want (SEO won't see that information)

V. 353
- only works inside the page component files 
- getStaticProps()
  - prepares the props for the page (ie the data the page needs)
  - allows you to load data before the component is executed so that the data can be rendered with the required data
- can run any code that would normally only execute on a server
  - can access a file system
  - code within getStaticProps will never execute within the browser 
  - must return an objects 
    - typically set a props object
      - the props object holds another object (the props object that you receive in your page component)
- This works similar to the loader functions created and used in React router v. 6

This moves the loading of the data to the build process side 
- (similar behavior to if it was being handled server side because none of the data is loaded/fetched client side in the browser)