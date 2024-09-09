import React from 'react'
import useThemeToggle from './ThemeToggle'

const Header = () => {
const {darkmode,handleToggle} = useThemeToggle()
  return (
    <div className='flex justify-between w-full px-5 dark:bg-gray-800'>
      <h1>Where in the world?</h1>
      <h1 onClick={handleToggle}>Dark Mode</h1>
    </div>
  )
}

export default Header
