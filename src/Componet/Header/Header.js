import React, { useState } from 'react'
import "./HeadStyle.css"
import MenuIcon from '@material-ui/icons/Menu';
import pic from '.././../img/fa color.png'
import pic1 from '.././../img/inst.png'
import pic2 from '.././../img/twi.png'
import pic3 from '.././../img/you.png'
import Profile from '../Profile/Profile';
import { Link } from "react-router-dom"

function Header() {
  const [show, setShow] = useState(false)

  const clickEffect = () => {
    setShow((prev) => !prev)
  }
  return (
    <div className="container">
      <Profile show={show} setShow={setShow} />
      <div className="main_container">
        <div
          className="menu_container"
          onClick={() => {
            clickEffect()
          }}
        >

          <MenuIcon style={{ height: '70px', width: '35px', color: "white", marginLeft: '-60px' }} />


        </div>
        <Link style={{ textDecoration: 'none', color: 'white', textDecorationWidth: 'none' }} to='/'>
          <div className="name_container">
            Hon. Kolawole Taiwo(HKT)
      </div>
        </Link>
      </div>

      <div className="social_container">
        <img src={pic} />
        <img src={pic1} />
        <img src={pic2} />
        <img src={pic3} />



      </div>
    </div>
  )
}

export default Header
