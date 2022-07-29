import { ThemeContext } from "../App";
import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <nav
          className={
            value.theme === "dark"
              ? "navbar navbar-dark navbar-bg-dark navbar-expand-lg py-3 fixed-top silver-border nav-background z-999"
              : "bg-light navbar-light navbar navbar-expand-lg py-3 fixed-top silver-border nav-background z-999"
          }
        >
          <div className="container">
            <a href="#" className="navbar-brand redder-text">
              Vampire Movies <i className="bi bi-camera-reels"></i>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#popular" className="nav-link reddish-text">
                    Popular
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#nowPlaying" className="nav-link reddish-text">
                    Now playing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#topRated" className="nav-link reddish-text">
                    Top rated
                  </a>
                </li>
                <li>
                  <div className="d-flex mt-1">
                    <p
                      className={
                        value.theme === "dark"
                          ? "mt-1 mb-0 me-1 text-light"
                          : "mt-1 mb-0 me-1"
                      }
                    >
                      Dark Theme
                    </p>
                    <label className="switch">
                      <input
                        type="checkbox"
                        onChange={(event) =>
                          event.nativeEvent.target.checked
                            ? value.setTheme("light")
                            : value.setTheme("dark")
                        }
                      />
                      <span className="slider round"></span>
                    </label>
                    <p
                      className={
                        value.theme === "dark"
                          ? "mt-1 mb-0 ms-1 text-light"
                          : "mt-1 mb-0 ms-1"
                      }
                    >
                      Light Theme
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Navbar;
