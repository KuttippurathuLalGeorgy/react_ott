import React, { useState } from 'react'
import "./Banner.css";
import { useEffect } from 'react';
import axios from '../../axios';
import { API_KEY } from '../../constants/constants';

function Banner() {
  // useEffect(() =>{
  //   axios.get(`3/genre/movie/list?api_key=${API_KEY}`).then((response) =>{
  //     console.log(response.data);
  //   })
  // }, [])

  const[movie, setMovie] = useState();
  useEffect(() =>{
    axios.get(`3/trending/all/day?language=en-US?api_key=${API_KEY}`).then((response) =>{
      setMovie(response.data.results[8]);
    })
  }, [])
  return ( 
    <div className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: movie?.backdrop_path ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` : "none",
      backgroundPosition: "top",
    }}>
        <div className='content'>
          <h1 className='title'>{movie? movie?.original_title: ""}</h1>
          <h4 className='showtime'>⭐ {movie? movie?.vote_average % 1 == 0
                                        ? Math.floor(movie.vote_average)
                                        : movie.vote_average.toFixed(1) : ""} 
                                        ({movie? movie?.vote_count : ""})</h4>
          <div className='banner_buttons'>
              <button className='button'>Play </button>
              <button className='button'>My list </button>
          </div>
          <p className='description'>{movie? movie?.overview : ""}</p>
        </div>
        <div className="fade_bottom">
        </div>
      </div>
  )
}

export default Banner
