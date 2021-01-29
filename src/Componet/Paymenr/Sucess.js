import React from 'react'
import { useHistory } from "react-router-dom"

function Sucess() {
  const history = useHistory();
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

      Thanks For Suport Us
      <div>
        <button
          onClick={() => {
            history.push("/header")
          }}

        >
          click to go back
          </button>
      </div>

    </div>
  )
}

export default Sucess
