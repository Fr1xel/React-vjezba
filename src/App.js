import Navbar from "./navbar/index"
import SearchInput from "./search-input/index"
import PopularOrTopRatedMovies from "./popular-movies/index"
import SeriesPromo from "./series-promo";
import NowPlayingMovies from "./now-playing-movies";
import CartoonPromo from "./cartoon-promo";
import Footer from "./footer";
import './App.css';
import MovieInfoModel from "./info-model-movie";

function App() {
  return (
    <>
    <Navbar />
    <SearchInput/>
    <MovieInfoModel/>
    <PopularOrTopRatedMovies code="popular"/>
    <SeriesPromo />
    <NowPlayingMovies/>
    <CartoonPromo/>
    <PopularOrTopRatedMovies code="top_rated"/>
    <Footer/>
    </>
  );
}

export default App;
