import React from 'react'
import './foot.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="container_footer">
      <div className='footer'>
        <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} to='/BIOGRAPHY'>
          <div>
            . Biography
            &nbsp;
            &nbsp;
       </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} to='/previous office'>
          <div>
            . Previous Office
            &nbsp;
            &nbsp;
       </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white', textDecorationWidth: 'none', cursor: 'pointer' }} to='/education history'>
          <div>
            . Education History
            &nbsp;
            &nbsp;
       </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white', textDecorationWidth: 'none', cursor: 'pointer' }} to='/achievements'>
          <div>
            . Achievement/Awards
            &nbsp;
            &nbsp;
       </div>
        </Link>
        <Link>
          <div style={{ textDecoration: 'none', color: 'white', textDecorationWidth: 'none', cursor: 'pointer' }} to='/projects'>

            . Projects
        </div>
        </Link>

      </div>
      <div style={{ color: "#d8d8d8", display: "flex", justifyContent: "center", marginTop: "10px" }}>
        @BrighterDays_CodeLab
     </div>


    </div>
  )
}

export default Footer
