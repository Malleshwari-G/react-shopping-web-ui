
import React, {useState} from 'react'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Header from '../components/Header'
import Footer from '../components/Footer'

import {Gents, Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {
  
  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <WomenCollection ladiesFashion = {ladiesFashion}/>
      <Collections gentsFashion = {gentsFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
