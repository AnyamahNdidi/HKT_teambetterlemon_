import { Button } from 'bootstrap'
import React from 'react'

function Counter() {
  const [input, setInput] = React.useState(0)
  const [counting, setCounting] = React.useState(false)
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const InputNum = parseInt(input);
    if (counting && InputNum > 0) {
      return setTimeout(() => {
        setInput(InputNum - 1)
      }, 1000)

    } else {
      if (show) {
        alert("your time is up")


      }
    }


  }, [counting, input])

  const [start, setstart] = React.useState({})
  return (
    <div>
      <form>
        <input placeholder="please put in value"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button
          onClick={() => {
            setCounting(true)
          }}
        >start</button>
      </form>
    </div>
  )
}

export default Counter
