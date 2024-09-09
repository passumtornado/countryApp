import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header.Jsx'
import Home from './pages/Home'
import DetailsPage from './pages/DetailsPage'
import { getAllCountries } from './utils/countryapi'

const App = () => {
  const [countries,setCountries]=useState([])

  useEffect(()=>{
   const allCountries = async()=>{
      const result = await getAllCountries()
      console.log(result)
      setCountries(result)
   }
   allCountries()
  },[])
  return (
    <div className='w-screen h-screen bg-[#F2F2F2]'>
      <Header/>
       <Router>
        <Routes>
           <Route exact path='/' element={<Home countries={countries}/>} />
           <Route exact path='countryDetails/:id' element={<DetailsPage countries={countries}/>}/>
        </Routes>
       </Router>
    </div>
  
  )
}

export default App
