import React from 'react'

const Quotes = [
  "this is the best day of the year",
  "the fear of God is the beginning of knowledge",
  "Man shall not leave by bread alone"
]

function Quote() {
  const [quoter, setQuote] = React.useState(0)
  return (
    <div>
      <center

        style={{
          marginTop: "50px",
          fontSize: "25px",
          marginBottom: "30px"
        }}



      >
        This is the bestquote
      </center>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "25px"

      }}

        onClick={() => {
          setQuote(quoter + 1)
          console.log(Quotes[0])
        }}


      >
        {Quotes[quoter % Quotes.length]}
      </div>

    </div>
  )
}

export default Quote
