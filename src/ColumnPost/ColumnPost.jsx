import React, { useEffect, useState } from 'react'
import { API_KEY,HomeAPIUrl } from '../constants/constants';
import Rowpost from '../compnents/Rowpost/Rowpost';
import axios from '../axios';

const ColumnPost = () => {
    const [list, setList] = useState([]);
    const homeList = HomeAPIUrl;

    useEffect(() =>{
      homeList.list.map((e) =>{
        axios.get(`${e.url}api_key=${API_KEY}`).then((response) =>{
            const newItem = { category: e.genre, list: response.data.results ?? []};
            setList(list => [...list, newItem]);
          }).catch(err =>{
            console.log(err)
          })
      })
    }, [])

  return (
    <div>
        {
            list.map((item, index )=>(
               item.list.length > 0 &&
                <Rowpost 
                key={index}
                item={item}/> 
            ))
        }
    </div>
  )
}

export default ColumnPost
