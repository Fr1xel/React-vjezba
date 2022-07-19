import Rating from "../../rating-color"

const Movies = ({ movies }) => {
    return movies.map(movie => {
        return (
            <div className="col-lg-2 col-md-4 col-6 mx-4 hover-bigger click-info-now-playing cursor-pointer" key = {movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`} className="img-fluid border-radius"></img>
                    <h5 className="p-3 silver-border">{movie.title}</h5>
                    <Rating movie = {movie}/>
                    </div>
        )
    })
}

export default Movies