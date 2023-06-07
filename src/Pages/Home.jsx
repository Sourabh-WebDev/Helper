import React from 'react'
import './Home.css'
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import FirstSection from '../Component/FirstSection'

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="title">
        {/* <!-- --navbar-- --> */}

        <Header />

        <div className="container-fluid bgFirstSectionImg ">
          {/* <!-- --Tittle-- --> */}
          <FirstSection />
        </div>
      </section >
    </>
  )
}

export default Home