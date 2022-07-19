const Rating = ({ movie }) => {
    if(movie.vote_average < 3){
        return (
            <p className="lead"><span className="fw-bold">Rating:</span>
            <span className="rating" style={{color: "red"}}>{movie.vote_average}</span>/10</p>
        )
    }
    if(movie.vote_average < 5){
        return (
            <p className="lead"><span className="fw-bold">Rating:</span>
            <span className="rating" style={{color: "orange"}}>{movie.vote_average}</span>/10</p>
        )
    }
    return (
        <p className="lead"><span className="fw-bold">Rating:</span>
        <span className="rating" style={{color: "lime"}}>{movie.vote_average}</span>/10</p>
    )
}

export default Rating