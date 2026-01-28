import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../constants/constants';
import Rowpost from '../compnents/Rowpost/Rowpost';

const ColumnPost = () => {
    const[movie, setMovie] = useState();
      useEffect(() =>{
        axios.get(`3/trending/all/day?language=en-US?api_key=${API_KEY}`).then((response) =>{
          console.log(response.data.results[0]);
          setMovie(response.data.results[0]);
        })
      }, [])
  return (
    <div>
        <Rowpost/>
        <Rowpost/>
        <Rowpost/>
        <Rowpost/>
      
    </div>
  )
}

export default ColumnPost
