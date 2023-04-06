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

V. 155 Preventing Function re-creation with useCallback()
-  for memo to work on objects as well as primitive types
useCallback()
- allows us to store a function across components. 
- tell it that the function should not be recreated with every execution
- stores the function in react memory and calls on that specific function when it needs to be reused rather than needing to recreate it every time. 
How to use it? 
- pass out function as a first argument to the useCallback function
- the second argument should be the dependencies required. 
  - if empty 
    - we are telling react to store the function as is and do not make any updates to the function under any circumstances 
  - If including a state as a dependency 
    - you are telling React that you should update the function if and only if the state of the given dependencies changes. Otherwise, do not update the function 

V. 157 A First Summary
- React = component based 
  - job of components in React is to return JSX code (describing the output of that component)
- State, props, context 
  - props and context all come down to state changes 
  - to make changes to a component or data, or parts of the application 
  - when you make changes to the state, the component where those state changes were made is re-evaluated
  - re-evaluated = the component function is executed again. 
    - resulting in a new output (could be the same as previously or different based on the state change)
      - react compares the latest function evaluation to the previous evaluations result (completed for all affected components )
        - then hands off any changes (differences) to React DOM (to render the changes)
          - react DOM takes those changes and applies them to the real browser DOM 
      - re-evaluation occurs on the component and all components that are rendered within that component. 
        - avoid unnecessary re-evaluations by using React.memo()
          - to specify what components to re-evaluate 
    - re-evaluation of functions within that component will create new function objects 
      - which could result in unwanted side effects?
  - useCallback = store the function value and do not reevaluate it when the component function runs again as long as (stated) dependencies did not change.

If the app function runs again when the state changes, doesn't that mean we are always reinitializing our state? 
- Why does that not cause a problem?

V. 158 A Closer Look At State & Components 

- Interactions between state and components are handled (by React) with the useState hook. 
- useState creates a new slice of state and attaches to a component. 
  - react manages this slice and ties it to the component for you behind the scene.
- React ensures that useState and the default value you initial assign to useState is only considered once (despite the re-evaluations)
- When a component is initially evaluated React creates the state and assigns in the default value. 
  - for subsequent re-evaluations, React recognizes that the state object for that component already exists and in turn only UPDATES the state, rather than replaces it with a new object (as is done with other objects created by functions) 


V. 159 Understanding State Scheduling and Batching
How does React handle state updates? 
- state is not automatically updated with setStateName is run...
  - instead React schedules a state update with the new data
  - most of the time the "scheduling" is very fast and feels "instant"
    - if React considers other tasks to have a higher priority...
      - it may postpone the state update... however 
        - react will keep the order of state updates if multiple state updates for the same state object/type are received. 
- !!!! If your state update depends on the previous state snapshot 
  - must use the function form of the state update. 
    - setStateName((prevStateName) => !prevStateName);
      - this will ensure that react checks the previous state update before completing the new state update. 
