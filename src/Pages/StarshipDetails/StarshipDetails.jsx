import { useEffect, useState } from 'react'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  useEffect(() => {
    // const fetchStarshipDetails = async () => {
    //   const starshipData = await getStarshipDetails()
    //   setStarshipDetails(starshipData.results)
    // }
    // fetchStarshipDetails()
  }, [])

  return ( 
    <>
      <h3>heres some ship details</h3>
    </>
  );
}

export default StarshipDetails;