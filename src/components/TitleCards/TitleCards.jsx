/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'





const TitleCards = ({title, category}) => {

  const [apiData,setApiData] = useState([]);

  const cardsRef= useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY2ODllYWMzMTg5YWJjNjIwYTJmMmVhNDVlMjY4MyIsIm5iZiI6MTcyNTM1MDIwNi4wNzM1NTcsInN1YiI6IjY2ZDZiZjczMjBhZDY2MTZlZDY2MDE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEc4hzys9woECqhw7L_t18NEaS60OU_R-pK8dSqw3l0'
    }
  };
  
 


  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; 
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards