import "./search.css"

const SearchInput = () => {
    return (
        <section className="text-light pt-2 p-lg-0 text-center header-background">
      <div
        className="d-sm-flex overflow-hidden position-relative overflow-hidden p-sm-5 p-2 bottom-red"
      >
        <div className="left-search p-5 silver-border">
          <div className="container">
            <h1 className="lh-base">
              Find a movie of <span className="blood">YOUR</span> choice
            </h1>
            <i className="bi bi-arrow-bar-down fs-1 color-red"></i>
            <form action="">
              <input
                type="text"
                className="input-top"
                id="movieSearch"
                placeholder="Bad Boys"
              />
            </form>
            <p className="lead text-secondary mt-2">
              Make sure to press Enter on mobile phones
            </p>
          </div>
        </div>
        <div className="diagonal"></div>
        <div className="right-search p-5">
          <div className="conteiner">
            <h1 className="lh-base">
              Or find <span className="blood">YOUR</span> favorite actor
            </h1>
            <i className="bi bi-arrow-bar-down fs-1 color-red"></i>
            <form action="">
              <input
                type="text"
                className="input-top"
                placeholder="Tom Hanks"
                id="peopleSearch"
              />
            </form>
            <p className="lead text-secondary mt-2">
              Make sure to press Enter on mobile phones
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default SearchInput