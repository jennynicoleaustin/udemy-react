import styles from './AddUser.module.css'
import Card from "../ui/Card";
import Button from "../ui/Button";
import {useState} from "react";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const addUserHandler = (e) => {
        e.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        // + in front of the variable ensures it is a number.
        if (+enteredAge < 1) {
            return;
        }
        setEnteredUsername("")
        setEnteredAge("")
        props.onAddUser(enteredUsername, enteredAge);

    }

    return (
        <>
            <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label  htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type='submit'>ADD USER</Button>
            </form>
            </Card>
        </>
    )
}
export default AddUser;