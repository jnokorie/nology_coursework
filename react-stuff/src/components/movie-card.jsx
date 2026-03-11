import styles from "./moviecard.module.css"

const MovieCard = ({ title, director, year, rating }) => {
    return (
        <div className={styles.center}>
            <h1>{title}</h1>
            <p>{director}</p>
            <p>{year}</p>
            <p>{rating}</p>
        </div>
    )
}


export default MovieCard