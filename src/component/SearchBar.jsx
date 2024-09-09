import React, { useState } from 'react'

const SearchBar = () => {
    const [countryName,setCountryName]=useState()

    const handleChange = (e)=>{
        e.preventDefault()
        setCountryName(e.target.value)
    }
  return (
    <div className='flex justify-between w-full px-5'>
      <input type='text' placeholder='search country' value={countryName} onChange={handleChange}/>
    </div>
  )
}

export default SearchBar
