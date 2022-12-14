import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
    <div className='card-container'>
      <div className='ship-card'>
        <div>
          NAME: {starshipDetails.name}
        </div>
        <div>
          MODEL: {starshipDetails.model}
        </div>
        <Link to='/'>RETURN</Link>
      </div>
    </div>  
    </>
  );
}

export default StarshipDetails;