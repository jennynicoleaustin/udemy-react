V. 151 How React Works 
- JS library for building user interfaces
  - Works with Components 
  - React does not actually know how to work with the internet... 
- the ReactDom is the interface to the web
  - Responsible for brings the components to what the user sees on the screen. 

React determines what the components should look like and sends that information to React Dom.
React DOM manipulates the real DOM 

Reevaluating vs reRendering 
- Reevaluating an element in React does not mean that the dom is rendered

Components vs the Real DOM 
- Components 
  - reevaluated whenever props, state, or context changes
  - React executes components functions 
  - this happens only in memory and is not very performance heavy
- Real DOM
  - difference for the real dom are only re-rendered when there are changes. not every time the component is reevaluated.

V. 153 Child Component Re-rendering 
- If the parent component is re-evaluated the child component will rerender even if no elements on the child component change
React.memo (DemoOutput)
- wrap all children in this, and you will only re-render the children if an element within the children has changed. 
  - use of this comes with a cost -- only really useful if you have a huge children prop change. 