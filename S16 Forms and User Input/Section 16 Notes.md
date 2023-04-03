V. 198 
- invalid vs valid inputs 
- when should we validate or check user input? 
  - on submit? 
    - wait until the user is done and then provide feedback 
      - benefit: avoid unnecessary warnings
      - downside: potentially provide feedback too late 
  - lose focus?
    - wait until the user finishes a particular input field but do not wait until the user submits the form 
      - benefit: allows user to finish a particular input before warning, useful in untouched forms
      - downside: when a user returns to fix the input there is only feedback after they are complete again rather than as they try to change it
  - onChange?
    - direct feedback to user with every keystroke
      - downside: only validate on keystroke means there will be a form full of errors before the user even has a chance to fill the form.
  - BEST OPTION?
    - a combo of lose focus and onchange 
      - lose focus initially and then onchange when a user is fixing an error. 

V. 199 
Two main ways to fetch a user input 
- store value in a state variable 
- ref to fetch data once the user is done typing the data. 
REF
- Useful if you only need the data 1x 
STATE 
- when you need to reset the input to an empty string

V. 200 Basic Validation 
- Rules of validation.. 
  - validation client side should be used for improving the user experience 
  - validation should be done server side because the client side code can always be edited in the browser.

V. 202 
- setting the initial value to true when it is not true...
- 