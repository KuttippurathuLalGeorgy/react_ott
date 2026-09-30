import React, { useEffect, useState } from "react";
import { API_KEY, HomeAPIUrl } from "../constants/constants";
import Rowpost from "../components/Rowpost/Rowpost";
import axios from "../axios";

function ColumnPost() {
  const [list, setList] = useState([]);

  useEffect(() => {
    HomeAPIUrl.list.forEach((e) => {
      axios
        .get(`${e.url}api_key=${API_KEY}`)
        .then((response) => {
          const newItem = {
            category: e.genre,
            list: response.data.results || [],
          };

          setList((prevList) => [...prevList, newItem]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <div>
      {list.map((item, index) =>
        item.list.length > 0 ? (
          <Rowpost
            key={index}
            item={item}
          />
        ) : null
      )}
    </div>
  );
}

export default ColumnPost;