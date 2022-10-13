import { useState, useEffect } from "react";
import { getStarshipList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <div>
        <h1>Starship List</h1>
        <div className='card-container'>
          {starships.length ? 
          <>
            {starships.map(starship => 
              <Link key={starship.name} state={{ starship }} to='/starship'>
                <div className='card'>
                {starship.name}
                </div>
              </Link>
            )}
          </>
          :
          <>
            <p>Loading...</p>
          </>
          }  
        </div>
      </div>
    </>
  )
}

export default StarshipList