import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./popular-movies.css";
import Movies from "./components/movies";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const PopularOrTopRatedMovies = (props) => {
  const { code, setModuleIsOpen, setModalMovie } = props;
  const [movies, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [movieBundle, setMovieBundle] = useState([]);
  const [loading, setLoading] = useState(true);

  const pushingMovies = (movies, movieBundle) => {
    movieBundle.length
      ? movieBundle.forEach((mainMovies) => {
          JSON.stringify(movies) === JSON.stringify(mainMovies)
            ? console.log(false)
            : movieBundle.push(movies);
          setPage(page + 1);
        })
      : movieBundle.push(movies);
  };

  const loadMorePosts = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${code}?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=${page}`
    );
    pushingMovies(data.data.results, movieBundle);
    console.log(movieBundle);
    setMovie(data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePosts();
  }, []);
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div
      className="text-align-start text-light mt-5 d-flex justify-content-center max-width-50rem"
      id="popular"
    >
      <div className="container">
        <div className="border-radius">
          <h1 className="redder-text">
            Popular Movies <i className="bi bi-bar-chart"></i>
          </h1>
          <InfiniteScroll
            useWindow={false}
            scrollThreshold="200px"
            className="row g-5 text-center pt-3 max-width-100 m-auto"
            style={{
              height: "auto",
              overflow: "hidden",
              willChange: "unset",
              transition: "transform 0.2s cubic-bezier(0, 0, 0.31, 1) 0s",
              transform: "none",
            }}
            id="popular"
            dataLength={movies}
            next={loadMorePosts}
            hasMore={true}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={loadMorePosts}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
          >
            <Movies
              movies={movieBundle}
              setModuleIsOpen={setModuleIsOpen}
              setModalMovie={setModalMovie}
            />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default PopularOrTopRatedMovies;
