import React from 'react'
import "./ProfileStyle.css"
import pic from '../../img/f.png'
import pic1 from '../../img/f2.png'
import pic2 from '../../img/f4.png'
import pic3 from '../../img/f3.png'
import { Link } from "react-router-dom"

function Profile({ show, setShow }) {
  return (
    <>
      {
        show ? <div className="profile_container">
          <div className="sidebar_container">
            <div className="first_container">
              <div style={{ color: "black", fontSize: "30px", marginLeft: '-10px' }}>
                (HKT)
               </div>
              <div style={{ marginTop: "10px", marginLeft: "200px", cursor: "pointer" }}
                onClick={() => {
                  setShow((prev) => !prev)
                }}
              >
                ❌
               </div>
            </div>
            <hr />
            <Link

              onClick={() => {
                setShow((prev) => !prev)
              }}

              style={{ textDecoration: 'none', backgroundColor: 'red' }} to='/'>
              <div className="second_container">
                HOME
            </div>
            </Link>
            <hr />
            <Link style={{ textDecoration: 'none', backgroundColor: 'red' }} to='/BIOGRAPHY'>
              <div className="second_container">
                BIOGRAPHY
            </div>
            </Link>
            <hr></hr>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/previous office'>
              <div className="third_container">
                PREVIOUS OFFICES
            </div>
            </Link>

            <hr></hr>
            <Link style={{ textDecoration: 'none', color: 'black', textDecorationWidth: 'none' }} to='/education history'>
              <div className="third_container">
                EDUCATION HISTORY
            </div>
            </Link>
            <hr></hr>
            <Link style={{ textDecoration: 'none', color: 'black', textDecorationWidth: 'none' }} to='/achievements'>
              <div className="third_container">
                ACIEVEMENT/AWARDS
            </div>
            </Link>
            <hr></hr>
            <Link style={{ textDecoration: 'none', color: 'black', textDecorationWidth: 'none' }} to='/projects'>
              <div className="third_container">
                PROJECTS
            </div>
            </Link>
            <hr></hr>
            <div className="third_con">
              <img src={pic} />
              <img src={pic1} />
              <img src={pic2} />
              <img src={pic3} />
            </div>
            <hr></hr>

          </div>




        </div> : null
      }
    </>
  )
}

export default Profile
