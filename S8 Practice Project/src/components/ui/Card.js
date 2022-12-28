import styles from './Card.module.css'

const Card = props => {

    return (
        // Children allows you to place the <Card> around other divs and have what is inside be rendered
        <div className={`${styles.card} ${props.className}`}>{props.children}</div>

    )

}; // Card
export default Card;