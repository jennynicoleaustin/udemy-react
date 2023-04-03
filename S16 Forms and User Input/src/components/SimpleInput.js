import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameIsTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }
    const nameInputBlurHandler = event => {
        setEnteredNameIsTouched(true);
    }


    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameIsTouched(true);
        if (!enteredNameIsValid) {
            return;
        }
        console.log(enteredName);
        // It is not making it to this code. Why?
        setEnteredName('');
        setEnteredNameIsTouched(false);
    }


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
