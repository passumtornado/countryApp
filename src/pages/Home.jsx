import React, { useEffect, useState } from 'react'
import SearchBar from '../component/SearchBar'
import FilterBar from '../component/FilterBar'
import Card from '../component/Card'
import { Link } from 'react-router-dom'

const Home = ({countries}) => {

  return (
    <div className='px-4 h-screen dark:bg-gray-800'>
      <div className='flex w-full px-5 justify-center'>
      <SearchBar/>
      <FilterBar/>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {
          countries.length > 0 ? countries.map((country)=>(<Link key={country.name.common} to={`/countryDetails/${country.name.common}`}><Card country={country}/></Link>)):<h1>Loading....</h1>
        }
        {/* <Card/> */}
      </div>
    </div>
  )
}

export default Home
