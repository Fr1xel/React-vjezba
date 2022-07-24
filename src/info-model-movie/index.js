import "./info-model.css";
import Modal from "react-modal";
import Rating from "../rating-color";

const MovieInfoModel = (props) => {
  const { moduleIsOpen, setModuleIsOpen, modalMovie } = props;
  if (modalMovie.backdrop_path) {
    return (
      <Modal
        isOpen={moduleIsOpen}
        overlayClassName={`z-9999 position-fixed-center`}
        className="custom-body-modal"
        style={{
          content: {
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${modalMovie.backdrop_path})`,
            backgroundSize: "cover",
            backgrondRepeat: "no-repeat",
          },
        }}
      >
        <div className="darker-background h-100 w-100 text-light">
          <button
            className="info-modal-button h1"
            onClick={() => {
              setModuleIsOpen(false);
            }}
          >
            <i className="bi bi-x text-light"></i>
          </button>
          <div>
            <div className="container text-center">
              <h1>{modalMovie.title}</h1>
              <p className="lead mt-5">{modalMovie.overview}</p>
              <p className="lead mt-5">
                <span className="fw-bold">Original Title:</span>{" "}
                {modalMovie.original_title}
              </p>
              <Rating movie={modalMovie} />
            </div>
          </div>
        </div>
      </Modal>
    );
  } else {
    return(
        <Modal
      isOpen={moduleIsOpen}
      overlayClassName={`z-9999 position-fixed-center`}
      className="custom-body-modal"
      style={{
        content: {
          backgroundColor: `black`
        },
      }}
    >
      <div className="darker-background h-100 w-100 text-light">
        <button
          className="info-modal-button h1"
          onClick={() => {
            setModuleIsOpen(false);
          }}
        >
          <i className="bi bi-x text-light"></i>
        </button>
        <div>
          <div className="container text-center">
            <h1>{modalMovie.title}</h1>
            <p className="lead mt-5">{modalMovie.overview}</p>
            <p className="lead mt-5">
              <span className="fw-bold">Original Title:</span>{" "}
              {modalMovie.original_title}
            </p>
            <Rating movie={modalMovie} />
          </div>
        </div>
      </div>
    </Modal>
    )
  }
};

export default MovieInfoModel;
