import Rating from "../../rating-color"

const Movies = (props) => {
    const { searchMovies, setModuleIsOpen, setModalMovie } = props
    return searchMovies.map(movie => {
        if(movie.poster_path){
            return(
            <div className="col-lg-2 col-md-4 col-6 cursor-pointer hover-bigger mx-4" key={movie.id} onClick={() => {setModalMovie(movie); setModuleIsOpen(true)}}>
                <img src={`https://image.tmdb.org/t/p/w500//${movie.poster_path}`} className="img-fluid border-radius"></img>
                <h5 className="p-3 silver-border">{movie.title}</h5>
                <Rating movie={movie}/>
            </div>
            )
        }
        else{
            return(
            <div className="col-lg-3 col-md-6 col-12 cursor-pointer hover-bigger mx-4" key={movie.id} onClick={() => {setModalMovie(movie); setModuleIsOpen(true)}}>
                <img src={require("./media/no-image.png")} className="img-fluid border-radius"></img>
                <h5 className="p-3 silver-border">{movie.title}</h5>
                <Rating movie={movie}/>
            </div>
            )
        }
    })

}
export default Movies