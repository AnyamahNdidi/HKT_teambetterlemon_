import React from 'react'
import Header from '../Header/Header'
import { app } from "../../base"
import pic from '../../img/pe.jpg'



const db = app.firestore().collection("Education")

function Education() {

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
        {
          data.map(({ schoolAttended, institutions }) => (
            <div style={{ marginTop: '100px' }}>
              <div> <h3>Primary Education </h3>
                <div>{schoolAttended}</div>
              </div>


            </div>

          ))
        }
        <div >
          <img src={pic} />
        </div>
      </center>
    </>
  )
}

export default Education
