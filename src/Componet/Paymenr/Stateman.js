import React, { useReducer } from 'react'
import "./StateStyle.css"



const initState = {
  counters: 10,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counters: state.counters + 1,
      };
    case "DECREASE":
      return {
        counters: state.counters - 1
      };

    case "ADD_VALUE":
      return {
        counters: action.payload,
      };

    default:
      return state
  }

};


function Stateman() {
  const [input, setInput] = React.useState(0)
  const [counters, setcounters] = React.useState(0)
  const [counter, setCounter] = React.useState(0)
  const [state, dispatch] = useReducer(AppReducer, initState)

  const increases = () => {
    setCounter(counter + 1);
  }
  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <center>

        <div style={{ marginTop: "50px", width: "500px", justifyContent: "center", alignItems: "center", lineHeight: "200%" }}>
          <div>State Management</div>
          <div className="inputanbutton">

            <input placeholder="please put in value"
              value={input}
              onChange={
                (e) => {
                  setInput(e.target.value)
                }
              }


            />
            <button

              onClick={() => {

                dispatch({
                  type: "ADD_VALUE",
                  payload: parseInt(input)
                })
                // setCounter(input)
              }}
            >Enter</button>

          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <p>{state.counters}</p>

            <div style={{ display: "flex", justifyContent: "space-around", width: "100px", alignItems: "center" }}>
              <button onClick={() => {
                dispatch({
                  type: "DECREASE"
                })


              }


                // decrease

              }>-</button>
              <button onClick={() => {
                dispatch({
                  type: "INCREASE"
                })

              }


                // increases
              }>+</button>
            </div>

          </div>

        </div>

      </center>

    </div >
  )
}

export default Stateman
