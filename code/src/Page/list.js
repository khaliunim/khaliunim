import './list.css';  
import axios from 'axios';
import { Card } from '../Component/Card';
import { MOVIE_TREND } from '../Component/trendData';
import React, { useEffect, useState } from 'react';
import { MOVIE_LATE } from '../Component/lateData'
import { Link } from 'react-router-dom';

// export const instance = axios.create()

function List() {
  const [ldata, setLateData] = useState([]);
  const [tdata, setTrendData] = useState([]);
  const tmovie = MOVIE_TREND;
  const lmovie = MOVIE_LATE;

  const getData = () => {
    try {
      setTrendData(tmovie)
      setLateData(lmovie)
      console.log(tmovie, lmovie)
    } 
    catch (error) {
      alert("error")
    }
  }
  useEffect(() => {
    getData()
  }, []);

    return (
        <div className='listAllContainer'>
          <div className='header'>
            <h1 className='title'>Trending</h1>
            <Link to={"/"}><button className='back'>Home</button></Link>
          </div>

          <div className='listContainer'>
            {
              tdata.map((cur) => 
              <Card 
              img={cur.img}
              name={cur.name}
              year={cur.year}
              time={cur.runtime}
              id={cur.id}
              />)
            }
          </div>
          <h1 className='title'>Latest Movies</h1>
          <div className='listContainer'>
            {
              ldata.map((cur) => 
              <Card 
              img={cur.img}
              name={cur.name}
              year={cur.year}
              time={cur.runtime}
              id={cur.id}
              />)
            }
          </div>
        </div>

    )
}
export default List;