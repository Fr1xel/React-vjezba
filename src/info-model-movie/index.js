import "./info-model.css"

//!!!----UNDER CONSTRUCTION----!!!//

const MovieInfoModel = (movie) => {
    movie.id ?
        <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center position-fixed-center z-9998 darker-background click-leave text-light">
    <div className="w-90 h-60 text-center dark-background-poster border-radius position-relative z-9999">
    <button className="position-absolute tl-0 button-close "><i className="bi bi-x h1"></i></button>
    <div className="overflow-y-scroll scroll-transparent height-100">
    <div className="container  iframe-place">
    <h1 className="p-5">{movie.title}</h1>
    <p className="lead p-5">{movie.overview}</p>
    <p className="lead"><span className="fw-bold">Original Title:</span> {movie.original_title}</p>
    <p className="lead"><span className="fw-bold">Rating:</span> <span className="rating">{movie.vote_average}</span>/10</p>
    </div>
    </div>
    </div>
    </div>
    
    :
        <></>
}

export default MovieInfoModel