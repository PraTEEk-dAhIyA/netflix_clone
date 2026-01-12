import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'


const TitleCards = ({ title, category }) => {

  const [apidata, setapidata] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    }
  };



  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setapidata(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel)
  }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
         {apidata.map((card, index) => {
          return <Link to ={`/player/${card.id}`}className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w300' + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}
export default TitleCards

