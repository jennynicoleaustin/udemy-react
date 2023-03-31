V. 186 What are custom Hooks 
- Regular JS functions that...
  - can contain stateful logic into reusable functions
- custom hooks can use other React hooks and React state
Allows you to outsource logic into a custom hook that you can then call from the various components

V. 187 Creating a custom hook function 
- use case for custom hooks 
  - repeated code that can be refactored to be a hook rather than a component that is changed via props 

Hooks should only be used in react component functions or in custom hooks 

V. 188 Using Custom Hooks
- when using your custom hook in a component the component that you are using will get its own useState
  - if you use your custom hook in multiple components each component gets its own version of those hooks
- custom hooks return an array [element, setElement]
  - return whatever it is that you want to return 