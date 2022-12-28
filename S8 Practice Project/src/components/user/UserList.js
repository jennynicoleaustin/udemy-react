import Card from "../ui/Card";
import styles from "./UserList.module.css"

const UserList = props => {



    return (
        <Card className={styles.users}>
          <ul className={styles.users}>
              {props.users.map(user => <li key={user.name}>{user.name} ({user.age} years old)</li>)}
          </ul>
        </Card>

    )

}; // UserList
export default UserList;