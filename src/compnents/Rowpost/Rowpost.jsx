import React, { useEffect, useState } from 'react'
import "./Rowpost.css"
import axios from '../../axios';
import { API_KEY, ImageUrl } from '../../constants/constants';

function Rowpost() {
  const[movies, setMovie] = useState();
  useEffect(() =>{
    axios.get(`3/trending/movie/day?language=en-US?api_key=${API_KEY}`).then((response) =>{
      console.log(response.data);
      setMovie(response.data.results);
    })
  }, [])
  return (
    <div className='row'>
      <h1>{movies? movies[0].media_type : ""}</h1>
      <div className="posters">
        {movies?.map((element) => (
          <div className="posterImage">
              <img
                key={element.id}
                className="poster"
                src={`${ImageUrl+element?.backdrop_path}`}
                alt="poster"
              />
            <h4 className="posterName" >{movies? element.title : ""} </h4>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Rowpost
