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