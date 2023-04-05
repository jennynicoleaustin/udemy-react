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

V. 354 
Potential problems with using getStaticProps()
- Outdated data? 
  - the data in this function is generated during the build process so if we generate new data the source code would not reflect the updates 
- revalidate property! 
  - unlocks Incremental static generation 
  - expects a number 
    - number of seconds, to wait until regenerating the page
      - ... when there are requests for the page
    - how often does the data change? 
      - base your number off the frequency which your data changes. 

V. 355 Exploring Server-side Rendering 
- Next.js will pre-render the page (that this is used on) on each request that uses the data that is returned by getServerSideProps
- runs on the server after deployment
- since this code only runs on the server this is a safe place to include elements you would not want exposed to the client. 
- access to the context parameter 
  - can be useful for auth, when you need to check session cookies etc. 
- Normally when fetching data you would return a response object, with this function you are accessing the res object via context and returning the props object.
the page is pre-rendered for every incoming request 
  - and thus the data is available in the source code and SEOs can access it. 

Which is better to use? 
- getStaticProps()
  - better if you have data that does not constantly change
  - and when you do not need to access the request object (ie for authentication)
  - allows you to take advantage of the pre-loaded page being stored in a CdN as cached data ready to be served. 
- getServerSideProps()
  - guaranteed to run on every incoming request
    - downside is that you need to wait for the data to be loaded/pre-rendered every time. 
    - useful when you can code that updates all the time, but cumbersome if your data only updates at given intervals or rarely. 