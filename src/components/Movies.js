import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movies.css";

const Movies = ({ year, title, summary, poster, geners }) => {
  return (
    <Link
      to={{
        pathname: "movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          geners,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {geners &&
              geners.map((gener) => <li className="movie__gener">{gener}</li>)}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

Movies.prototype = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  geners: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movies;
