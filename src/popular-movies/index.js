import { useEffect, useState } from "react"
import "./popular-movies.css"
import Movies from "./components/movies"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"

const PopularOrTopRatedMovies = (props) => {
  const {code, setModuleIsOpen, setModalMovie} = props
    const [movies, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    useEffect(() =>{
       const fetchPosts = async () =>{
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${code}?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=${page}`)
        setMovie(data.data.results)
        setLoading(false)
       }
        fetchPosts()
    })
    return(
        loading ? <h1>loading...</h1> :
        <section
      className="text-align-start text-light mt-5 d-flex justify-content-center"
      id="popular"
    >
       <div className="container">
        <div className="border-radius">
          <h1 className="redder-text">
            Popular Movies <i className="bi bi-bar-chart"></i>
          </h1>
          <div
            className="row g-5 text-center pt-3 max-width-100 m-auto"
            id="popularDiv"
          >
            <Movies movies = {movies} setModuleIsOpen = {setModuleIsOpen} setModalMovie = {setModalMovie}/>
          </div>
          <div className="d-flex justify-content-between">
            <button className="page-button h3" onClick={() => page !== 1 ? setPage(page-1) : setPage(page)}><i className="bi bi-arrow-left"></i></button>
          <p className="h3 color-red">Page: {page}</p>
          <button className="page-button h3" onClick={() => setPage(page+1)}><i className="bi bi-arrow-right"></i></button>
          </div>
          
        </div>
      </div>
    </section>
    )
}

export default PopularOrTopRatedMovies