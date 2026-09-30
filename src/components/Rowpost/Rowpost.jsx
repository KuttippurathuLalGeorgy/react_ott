import React from "react";
import "./Rowpost.css";
import { ImageUrl } from "../../constants/constants";

function Rowpost({ item }) {
  if (!item) return null;

  return (
    <div className="row">
      <h1 className="category">{item.category}</h1>
      <div className="posters">
        {item.list.map((movie) => (
          <div key={movie.id} className="poster-wrapper">
            <div className="poster-container">
              <img
                className="poster"
                src={`${ImageUrl}${movie.backdrop_path}`}
                alt={movie.title || movie.name}
              />

              <div className="poster-details">
                <h4 className="poster-title">
                  {movie.title || movie.name}
                </h4>

                <p className="poster-desc-date">
                  {(movie.release_date || movie.first_air_date || "").slice(
                    0,
                    4
                  )}
                </p>

                <p className="poster-desc-over">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rowpost;