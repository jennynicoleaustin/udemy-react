## Notes 

### Wrapper Components/Fragments 
- wrap everything in a <></>

### Modals
- Should not be nested -- it's an overlay 
  - Issues could happen with a screen reader
- Solution = Portals 

### Portals
- Place to put the portal
- tell the component to use the portal 
- allows the app to be semantically more correct html rendering. 

### Refs 
- Allow us to get access to other dom elements and work with them 
- set up a connection with a html element that is being rendered and the other JS code. 
- useRef hook 
  - returns a value that allows us to work with the element 
  - initialized to be undefined
  - ref attribute in the React component/element 
  - the ref stores the actual dom node. 
    - OK to read data from this but you should not manipulate it 
- If you are only trying to READ values from an input than REF is preferred. 
- If you need to manipulate the values of an input then you should use State 
