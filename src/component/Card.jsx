import React from 'react'

const Card = ({country}) => {
  return (
    <div className='flex flex-col gap-5'>
      <span>
        <img src={country.flags.svg} alt={country.altSpellings[0]}/>
      </span>
      <div>
       <h1>{country.name.common}</h1>
       <div className='flex flex-col'>
        <span className='flex gap-2'>
          <p>Population:</p>
          <p>{country.population}</p>
        </span>
        <span className='flex gap-2'>
          <p>Region:</p>
          <p>{country.region}</p>
        </span>
       </div>
      </div>
    </div>
  )
}

export default Card
