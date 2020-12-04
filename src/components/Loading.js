import React from 'react'
import loadinggif from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="Loading">
          <h4>rooms data loading...</h4> 
          <img src={loadinggif} alt="Loading!"/> 
        </div>
    )
}

