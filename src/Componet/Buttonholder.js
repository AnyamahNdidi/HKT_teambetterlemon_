import React from 'react'
import Buttoneffect from './Buttoneffect'
import Button from './Buttoneffect'

function Buttonholder() {
  return (
    <div>
      <center style={{
        display: "flex",
        justifyContent: "center",
        justifyContent: "space-around"
      }}>
        <Buttoneffect name="Submit" background="pink" />
        <Buttoneffect name="created" background="blue" />
        <Buttoneffect name="enter" background="red" />

      </center>

    </div>
  )
}

export default Buttonholder
