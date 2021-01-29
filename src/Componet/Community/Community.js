import React from 'react'
import {
  AllContainer,
  AllContainer2,
  Nacon,
  BodyCon,
  Icon1,
  Icon2, Icon3,
  Allicon,
  Works,
  Connect,
  Media,
  Mylink,
  Iconimg,
  Iconimg2,
  Bodycon1,
  Bodycon2,
  Minibody1,
  Minibody2,
  Listed



} from "./CommunityStyle.js"
import itunes from "../../img/code.png"
import skype from "../../img/play-circle.png"
import youtube from "../../img/group-profile-users.png"
import { Link } from "react-router-dom"

// import data from "./Donatefiel.json"

const coll = ({
  marginTop: "10px",
  fontWeight: "500"
})

const allBody = ({
  //background: "yellow",
  width: "100%",
  height: "430px",
  marginTop: "60px",
  display: "flex",
  flexWrap: "wrap",



})

const cardMargin = ({
  height: "160px",
  width: "330px",
  background: "red",
  borderRadius: "5px",
  margin: "10px"
})


const bodycontent = ({
  position: "absolute",
  top: "45%",
  textAlign: "center",
  color: "white",
  fontSize: "30px",
  width: "25%"


})

function Community() {
  return (
    <>
      <AllContainer>
        <AllContainer2>
          <Nacon>
            <Allicon>
              <Mylink>
                <Icon1>
                  <Iconimg>
                    <img src={itunes} height="30px" />
                  </Iconimg>


                  <Works>
                    WORKS
                </Works>

                </Icon1>
              </Mylink>
              <Mylink>
                <Icon2>
                  <Iconimg2>
                    <img src={youtube} height="30px" />

                  </Iconimg2>

                  <Works>
                    CONNECTS
                </Works>

                </Icon2>
              </Mylink>
              <Mylink>
                <Icon3>
                  <Iconimg>
                    <img src={skype} height="30px" />
                  </Iconimg>
                  <Works>
                    MEDIA
                </Works>
                </Icon3>
              </Mylink>
            </Allicon>
          </Nacon>
          <BodyCon>
            <Bodycon1>
              <div style={coll}>
                Latest Collections
              </div>
              <div style={allBody}>

              </div>


            </Bodycon1>
            <Bodycon2>
              <Minibody1>
                <Listed>
                  <li><b>Stats</b></li>
                  <br />
                  <li><b>60</b> Products</li>

                  <li><b>4</b> Collections</li>

                  <li><b>331</b> Infuluencers</li>

                  <li><b>1.2k</b> Likes</li>
                  <hr width="30"></hr>
                </Listed>

              </Minibody1>
              <Minibody2>



              </Minibody2>

            </Bodycon2>

          </BodyCon>

        </AllContainer2>

      </AllContainer>
    </>
  )
}

export default Community
