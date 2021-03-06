import "./now-playing.css";
import { useState, useEffect } from "react";
import Movies from "./components/movies";
import axios from "axios";
import { ThemeContext } from "../App";

const NowPlayingMovies = (props) => {
  const { setModuleIsOpen, setModalMovie } = props;
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1"
      );
      setMovie(data.data.results);
      setLoading(false);
    };
    fetchPosts();
  });
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <ThemeContext.Consumer>
      {(value) => (
        <section
          className={
            value.theme === "dark"
              ? "mt-5 text-align-start text-light max-width-100"
              : "mt-5 text-align-start text-dark max-width-100"
          }
        >
          <div className="container">
            <h1 className="color-red">
              Now Playing <i className="bi bi-clock"></i>
            </h1>
            <div
              className="d-flex scroll-right py-3 text-center"
              id="nowPlaying"
            >
              <Movies
                movies={movies}
                setModuleIsOpen={setModuleIsOpen}
                setModalMovie={setModalMovie}
              />
            </div>
          </div>
        </section>
      )}
    </ThemeContext.Consumer>
  );
};

export default NowPlayingMovies;
