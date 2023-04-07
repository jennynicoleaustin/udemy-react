Firebase URL
https://udemy-react-42399-default-rtdb.firebaseio.com/tasks.json

V. 191 Building a Custom Http Hook 
- all custom hooks must start with use
- creating a generic sendRequest hook that allows us to fetch, post, etc 

Steps to creating custom hooks 
- What elements of the function do you want to be "configurable"? (aka flexible)

V. 194 
- bind()
  - calling the bind method on a function pointer allows us to pre-configure a function (without executing the function right away)
  - first argument = set the "this" keyword
  - second argument = the argument you would like to be set on the to be called function.