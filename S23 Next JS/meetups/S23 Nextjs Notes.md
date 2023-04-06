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

V. 356 Params for SSG Data Fetching 
- getStaticProps(context)
  - the context key here does NOT have res or req but DOES have PARAMS

V. 357 Preparing Paths with "getStaticPaths()" 
- must be exported within a component page when it is a 
  - dynamic page & you are using getStaticProps 

Using getStaticPaths 
- with getStaticProps a page is pre-generated during the build process
  - this means that next.js must pre-generate all the variations of the dynamically rendered page 
    - in order for this to happen next.js must know what values to pre-generate the pages for. 
- because these dynamically rendered pages are pre-generated (and if a user enters a path that is not available will receive a 404 error)...
  - getStaticPaths returns an object that describes all possible paths (values used to dynamically render the pages)
Must return an object with a paths keys
  - paths key must be an array with one object per version of the dynamic page
- Real world scenario = you would dynamically render the possible object values from a database rather than hard coding them 

Needs a fallback key 
- False 
  - means that the paths array contains all possible dynamic values and entering a value not in the paths array will result in a 404 error
- True 
  - user enters value not in the paths array
    - next.js will try to generate a page dynamically for the incoming request. 
- Fallback allows you to pre-generate pages for the most common details pages and allows you to dynamically render the other pages 

V. 358 Intro to API Routes 
- Next.js allows you to create a backend within the same project by using the API routes folder 
- within the pages folder 
  - folder named api 
    - Next will take any JS files within the api folder and convert them into api routes. 
      - end points that can be targeted by requests and return and receive JSON data
- files within the api folder are NOT react components 
  - functions that contain server side logic 

V. 359 Working with MongoDB
- It is safe to add a password into the api folder files, since this will only ever run server-side 
  - HOWEVER!!!! Don't forget about Git so safer to add into a .env file 
- *** add try/catch to handle errors 