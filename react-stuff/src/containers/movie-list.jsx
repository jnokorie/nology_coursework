import MovieCard from '../components/movie-card'

const MovieList = () => {
    const movieData = [
        {
            id: 1,
            title: "Jurassic Park",
            director: "Steven Spielberg",
            year: 1993,
            rating: 8.2,

        },
        {
            id: 2,
            title: "The Matrix",
            director: "The Wachowskis",
            year: 1999,
            rating: 8.7,
        },
        {
            id: 3,
            title: "Sharknado",
            director: "Anthony C. Ferrante",
            year: 2013,
            rating: 3.3,
        }
    ]
    return (
        <>
        <MovieCard title={movieData[0].title} director={movieData[0].director} year={movieData[0].year} rating={movieData.rating} />
        <MovieCard title={movieData[1].title} director={movieData[1].director} year={movieData[1].year} rating={movieData.rating} />
        <MovieCard title={movieData[2].title} director={movieData[2].director} year={movieData[2].year} rating={movieData.rating} />
        </>
    )
}




export default MovieList