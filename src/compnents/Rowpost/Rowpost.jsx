import React from "react";
import "./Rowpost.css";
import { API_KEY, ImageUrl } from "../../constants/constants";

function Rowpost({ item }) {
  // const [movies, setMovie] = useState([]);
  // useEffect(() => {
  //   axios.get(`3/trending/movie/day?language=en-US&api_key=${API_KEY}`).then((response) => {
  //       setMovie(response.data.results);
  //     });
  // }, []);

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
                  alt="Image not Found"/>
            
                <div className="poster-overlay">
                  <h4 className="poster-title">{movie?.title ? movie.title : movie.name}</h4>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Rowpost;
