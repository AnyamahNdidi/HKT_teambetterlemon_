import React from 'react'
import "./MiddleStyle.css"
import { app } from "../../base"



const db = app.firestore().collection("CommunityWorks")
function MiddleContent() {
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
    <div className="middle_container">
      <div className="middle_head">
        Good Will
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="card_container">
          {
            data.map(({ image, description, billName, imageback, particapation, ItemsGiven, playback }) => (
              <div className="imcard">
                <div className="img_card">
                  <video type='video/mp4' controls src={playback} />

                </div>

                <div className="desc">
                  {billName}
                  {description}
                  {particapation}
                  {ItemsGiven}
                </div>
              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default MiddleContent
