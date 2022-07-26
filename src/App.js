import Navbar from "./navbar/index";
import SearchInput from "./search-input/index";
import PopularOrTopRatedMovies from "./popular-movies/index";
import SeriesPromo from "./series-promo";
import NowPlayingMovies from "./now-playing-movies";
import CartoonPromo from "./cartoon-promo";
import SearchResults from "./search-results";
import Footer from "./footer";
import "./App.css";
import MovieInfoModel from "./info-model-movie";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [moduleIsOpen, setModuleIsOpen] = useState(false);
  const [modalMovie, setModalMovie] = useState({});
  return (
    <>
      <Navbar />
      <SearchInput setSearch={setSearch} />
      <SearchResults
        search={search}
        setModuleIsOpen={setModuleIsOpen}
        setModalMovie={setModalMovie}
      />
      <MovieInfoModel
        moduleIsOpen={moduleIsOpen}
        setModuleIsOpen={setModuleIsOpen}
        modalMovie={modalMovie}
      />
      <PopularOrTopRatedMovies
        code="popular"
        setModuleIsOpen={setModuleIsOpen}
        setModalMovie={setModalMovie}
      />
      <SeriesPromo />
      <NowPlayingMovies
        setModuleIsOpen={setModuleIsOpen}
        setModalMovie={setModalMovie}
      />
      <CartoonPromo />
      <PopularOrTopRatedMovies
        code="top_rated"
        setModuleIsOpen={setModuleIsOpen}
        setModalMovie={setModalMovie}
      />
      <Footer />
    </>
  );
}

export default App;
