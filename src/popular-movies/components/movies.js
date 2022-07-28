import "./movies.css";
import Rating from "../../rating-color";

const Movies = (props) => {
  const { movies, setModuleIsOpen, setModalMovie } = props;

  return movies.map((mainMovies) =>
    mainMovies.map((movie) => {
      return (
        <div
          className="col-lg-3 col-md-6 col-12 cursor-pointer hover-bigger max-width-100 click-info-popular"
          key={movie.id}
          onClick={() => {
            setModalMovie(movie);
            setModuleIsOpen(true);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="img-fluid border-radius"
          ></img>
          <h5 className="p-3 silver-border">{movie.title}</h5>
          <Rating movie={movie} />
        </div>
      );
    })
  );
};

export default Movies;
