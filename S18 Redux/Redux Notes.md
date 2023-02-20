
#### Local State 
- State that belongs to a single component. 
- useState or maybe useReducer

#### Cross-Component State
- a button that opens a modal, or open another page
- useState or useReducer via prop chains

#### App-Wide State
- user auth status 
- prop chains

#### Redux vs Context
- cross-component or app-wide state 
- Context potential disadvantages 
  - complex Setup and management
  - not good for high frequency changes 

### Core Redux Concepts 
- Central Data (State) Store
- Components set up subscriptions to the Central Data store 
  - when the data changes the store notifies the components
- Components NEVER directly manipulate the data in the data store 
  - reducer function is responsible for mutating the data store 
    - (NOT useReducer) Reducer functions = general concept
- Action 
  - components dispatch or trigger actions 
    - js object that describes the kind of operation the reducer should 
    - action is forwarded to the reducer so that the data store can be mutated 