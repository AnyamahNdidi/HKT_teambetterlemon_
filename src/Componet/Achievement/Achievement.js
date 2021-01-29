import React from 'react'
import Header from '../Header/Header'
import pic from '../../img/aw.jpg'
import { app } from "../../base"



const db = app.firestore().collection("Award")

function Achievement() {

  const [data, setdata] = React.useState([])

  const getData = async () => {
    await db


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
      <center>
        <h3>Awards Collected By (HKT) </h3>
        {
          data.map(({ award }) => (
            <div>
              {award}
            </div>
          ))
        }
        <div>
          <img src={pic} />
        </div>
      </center>
    </>
  )
}

export default Achievement
