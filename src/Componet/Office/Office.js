import React from 'react'
import Header from '../Header/Header'
import { app } from "../../base"



const db = app.firestore().collection("PositionsHeld")

function Office() {
  const [data, setdata] = React.useState([])

  const getData = async () => {
    await db

      .limit(3)
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setdata(items);
      });
  };
  console.log(data);
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{ background: "#20639b" }}>
        <Header />
      </div>
      <div>
        {
          data.map(({ position, postheld, officeheld }) => (
            <div >
              <div>{position}</div>
              <div>{postheld}</div>
              <div>{officeheld}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Office
