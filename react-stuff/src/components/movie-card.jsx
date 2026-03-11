

const MovieCard = ({ title, director, year, rating }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{director}</p>
            <p>{year}</p>
            <p>{rating}</p>
        </div>
    )
}


export default MovieCard