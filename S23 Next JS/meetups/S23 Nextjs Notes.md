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

If you have a element you want wrapped around all pages include it on the _app.js file 

