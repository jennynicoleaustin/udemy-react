V. 386 
- Why would you replace redux with hooks?
  - stay in the React only world and avoid learning redux
  - keep bundle smaller by avoiding redux library (when you ship code to deploy it )

V. 387 Alternative: Using the Context API

V. 388 Toggling Favorites with the Context API

V. 389 Context API Summary
- Why shouldn't we use context in this way? 
  - context is meant for low frequency updates 
    - Auth, theme, etc.
  - NOT for flux-like or high frequency state changes.
  - shopping carts, favorites
- why not?
  - every time your state within useContext updates EVERY component that uses useContext will re-render.

V. 390 Custom Hook as a Store 
- create global variables (within the file) to be used in useState 
  - by creating them before, outside the scope of the hook, they will only be created once when the file is imported into a component, and then updated within the useState.

V. 391 Finishing the Store Hook

V. 392 Creating the Concrete Store

V. 393 Using the Custom Store

V. 394 Custom Hook Store Summary

V. 395 Optimizing the Custom Hook Store