import React, {useState} from 'react';
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";


function App() {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge}]
        })
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={usersList}/>
        </div>
    );
}

export default App;
