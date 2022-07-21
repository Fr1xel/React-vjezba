import axios from "axios"
import { useEffect, useState } from "react"
import Movies from "./components/movies"

const SearchResults = (props) => {
    const [ searchMovies, setSearchMovies] = useState({})
    const { search } = props
    useEffect(() => {
        const getSearchResults = async () => {
            const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&query=${search}&page=1&include_adult=false`)
            setSearchMovies(data.data.results)
        }
        search ?
        getSearchResults()
        : <></>
    }, [search])
    if(search.length > 3){
        return (
            <div className="container">
            <h1 className="color-red">Search results <i className="bi bi-search"></i></h1>
            <div className="d-flex scroll-right py-3 text-center text-light" id="searchContent">
                <Movies searchMovies={searchMovies}/>
            </div>
            </div>
        )
    }
}

export default SearchResults