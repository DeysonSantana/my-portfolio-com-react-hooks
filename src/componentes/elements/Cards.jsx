import styles from '../elements/Cards.module.css'

function Cards ({title, date, tags, description}) {
    return (
        <div className={styles.cards}>
                <h2>{title}</h2>
            <div>
                <span>{date}</span>
                <span>{tags}</span>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Cards