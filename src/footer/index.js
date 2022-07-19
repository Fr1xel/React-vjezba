const Footer = () => {
    return(
        <>
        <footer className="bg-dark text-light text-center mt-5">
      <div className="container pt-5 pb-3">
        <div className="row py-3 justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4 color-red">
              Movies
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#popular" className="reddish-text text-decoration-none"
                  >Popular</a>
              </li>
              <li className="mb-2">
                <a href="#nowPlaying" className="reddish-text text-decoration-none"
                  >Now playing</a>
              </li>
              <li className="mb-2">
                <a href="#topRated" className="reddish-text text-decoration-none"
                  >Top rated</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-2 bg-dark">
        <p className="lead text-secondary">Thanks for checking out our site!</p>
      </div>
    </footer>
    </>
    )
}

export default Footer