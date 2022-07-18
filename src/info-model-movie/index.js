import "./info-model.css"

//!!!----UNDER CONSTRUCTION----!!!//

const MovieInfoModel = (movie) => {
    return(
        <div class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center position-fixed-center z-9998 darker-background click-leave text-light">
  <div class="w-90 h-60 text-center dark-background-poster border-radius position-relative z-9999">
  <button class="position-absolute tl-0 button-close "><i class="bi bi-x h1"></i></button>
  <div class="overflow-y-scroll scroll-transparent height-100">
  <div class="container  iframe-place">
  <h1 class="p-5">{movie.title}</h1>
  <p class="lead p-5">{movie.overview}</p>
  <p class="lead"><span class="fw-bold">Original Title:</span> {movie.original_title}</p>
  <p class="lead"><span class="fw-bold">Rating:</span> <span class="rating">{movie.vote_average}</span>/10</p>
  </div>
  </div>
  </div>
  </div>
    )
}

export default MovieInfoModel