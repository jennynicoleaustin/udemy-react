import styles from "./Button.module.css"

const Button = props => {

    return (
        // If props.type is not defined then 'button' is used as a fallback type
        <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    )

}; // Button
export default Button;