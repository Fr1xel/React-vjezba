import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./popular-movies.css";
import Movies from "./components/movies";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeContext } from "../App";

const PopularOrTopRatedMovies = (props) => {
  const { code, setModuleIsOpen, setModalMovie } = props;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMorePosts = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${code}?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1`
    );
    setMovies(data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePosts();
  }, []);
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <ThemeContext.Consumer>
      {(value) => (
        <div
          className={
            value.theme === "dark"
              ? "text-align-start text-light mt-5 d-flex justify-content-center"
              : "text-align-start text-dark mt-5 d-flex justify-content-center"
          }
          id="popular"
        >
          <div className="container">
            <div className="border-radius">
              <h1 className="redder-text">
                Popular Movies <i className="bi bi-bar-chart"></i>
              </h1>
              <div className="row g-5 text-center pt-3 max-width-100 m-auto">
                <Movies
                  movies={movies}
                  setModalMovie={setModalMovie}
                  setModuleIsOpen={setModuleIsOpen}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default PopularOrTopRatedMovies;
