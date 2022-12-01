import React from 'react';
import './list.css';
import { Link } from 'react-router-dom';

export const list = () => {
    return (
        <div className='listContainer'>
          <Link to={"movie"}>Watch</Link>
        </div>

    )
}
export default list;