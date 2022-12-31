## Effects, Reducers & Context

Reacts main job:
- render UI & react to user input
- Evaluate and render JSX
- Manage state and props

Side Effects: Anything else 
- Store data in Browser storage
- HTTP requests
  - These tasks should happen outside the normal component evaluation (function) to make sure they don't block or delay rendering 

#### UseEffect
- allows us to control when it will run vs the code running everytime that useState changes. 

#### DeBalance user input 
- waiting for a pause in typing. 
- use setTimeOut 
### Clean up function -- 
- useEffect can return something 
  - it needs to be a function. 
- return value is the "clean-up function"
  - it will run before the rest of the functions inside the useEffect every time (except for the first time. )
  -   useEffect will run every time something changes after the first render if no dependencies are added. with an empty array we don't see it at all. 
  - when whatever you place inside the [] changes the useEffect will run again.
  

### useReducer for State Management

- Useful for when you have a more complex state or multiple, changing states, or dependencies. 
- "more powerful" replacement for useState.
- 