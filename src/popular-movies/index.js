import { useEffect, useState } from "react"
import "./popular-movies.css"
import Movies from "./components/movies"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"

const PopularOrTopRatedMovies = ({ code }) => {
    const [movies, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
       const fetchPosts = async () =>{
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${code}?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1`)
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
            <Movies movies = {movies}/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default PopularOrTopRatedMovies