import Navbar from "./navbar/index"
import SearchInput from "./search-input/index"
import PopularOrTopRatedMovies from "./popular-movies/index"
import SeriesPromo from "./series-promo";
import NowPlayingMovies from "./now-playing-movies";
import CartoonPromo from "./cartoon-promo";
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <SearchInput/>
    <PopularOrTopRatedMovies code="popular"/>
    <SeriesPromo />
    <NowPlayingMovies/>
    <CartoonPromo/>
    <PopularOrTopRatedMovies code="top_rated"/>
    </>
  );
}

export default App;
