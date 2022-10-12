import { useState, useEffect } from "react";
import { getStarshipList } from "../../services/api-calls";

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
          {starships.map(starship => 
            <div key={starship.name}>
              {starship.name}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default StarshipList