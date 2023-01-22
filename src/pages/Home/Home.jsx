import React from 'react'
import Navbar from '../../components/NAVBAR/Navbar'
import './Home.css'

import Header from '../../components/HEADER/Header'
import PropertList from '../../components/Property/PropertyList'
 import Featured from '../../components/Featured/featured'
 import MailList from '../../components/mailList/MailList'
 import Footer from '../../components/footer/Footer'
 function Home() {
  return (
    <div> 
   <Navbar/>
<Header/>
  
<div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <Featured/>
        <MailList/>
        <Footer/>
    
   </div>
   </div>
  )
}

export default Home