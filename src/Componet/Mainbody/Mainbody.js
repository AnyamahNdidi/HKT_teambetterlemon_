import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MiddleContent from '../MiddleContent/MiddleContent'
import Slider from '../Slider/Slider'

function Mainbody() {
  return (
    <div>
      <div style={{ background: "#20639b", }}>
        <Header />
      </div>
      <Slider />
      <MiddleContent />
      <Footer />
    </div>
  )
}

export default Mainbody
