import React from 'react'
import { useParams } from 'react-router-dom'
import useThemeToggle from '../component/ThemeToggle'

const DetailsPage = ({countries}) => {

  const {id} = useParams()
  const country = countries.find((country)=>{
    return country.name.common === id
  })
  console.log(country)
  console.log(id)
  return (
    <div className='flex gap-10 mt-10 px-5 h-screen dark:bg-gray-800'>
      <span>
        <img src={country?.flags?.svg} alt={country?.altSpellings[0]} width='180'/>
      </span>
      <div>
        <h1 className='dark:text-white'>{country?.name.common}</h1>
        <div>
          <h3 className='dark:text-white'>Native Name:{country?.region}</h3>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
