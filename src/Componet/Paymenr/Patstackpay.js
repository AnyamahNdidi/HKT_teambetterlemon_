import React from 'react';
// import logo from './logo.svg';
import { useHistory } from "react-router-dom"
import { usePaystackPayment } from 'react-paystack';
// import './App.css';

// const config = {

// };

//pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const Paynow = () => {
  const [amount, setAmount] = React.useState("")
  const [email, setEmail] = React.useState("")


  const history = useHistory();
  const onSuccess = (reference) => {
    history.push("/sucess")
    console.log(reference)

  }





  const initializePayment = usePaystackPayment({
    reference: (new Date()).getTime(),
    email: email,
    amount: amount,
    publicKey: 'pk_test_f747091150685438ae86d5a98b5df3c60275f367',
  });
  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center"

      }}>
        <input
          value={amount}
          onChange={
            (e) => {
              setAmount(e.target.value)
            }
          }
          placeholder="Amount" />

        <input
          value={email}
          onChange={
            (e) => {
              setEmail(e.target.value)
            }
          }
          placeholder="Email" />
        <div>you are given {amount / 100}</div>
      </div>

      <button onClick={() => {
        initializePayment(onSuccess, onClose)
      }}>PayNow</button>
    </div>
  );
};


export default Paynow;