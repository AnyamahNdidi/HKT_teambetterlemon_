import React from 'react'
import "antd/dist/antd.css"
import "./PayStyle.css"
import { Button, Layout } from 'antd';

import { Link } from "react-router-dom"
const { Header, Footer, Sider, Content } = Layout;
function PaymentHeader() {
  return (
    <Layout>
      <Header>
        <div className="allheader" >
          <div className="logoo">

          </div>

          <div className="navv">
            <Link to="/Counter" style={{ color: "white" }}>
              <div className="navlink">Counter</div>
            </Link>

            <Link to="/Quote" style={{ color: "white" }}>
              <div>Quote</div>
            </Link>
            <Link to="/statess" style={{ color: "white" }}>
              <div>State Mangement</div>
            </Link>
            <Button >
              <Link to="/paystack">
                Donate
            </Link>

            </Button>
          </div>


        </div>

      </Header>
    </Layout>
  )
}

export default PaymentHeader
