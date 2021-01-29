
import './App.css';
import Mainbody from './Componet/Mainbody/Mainbody';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Biography from './Componet/Biography/Biography';
import Office from './Componet/Office/Office';
import Education from './Componet/Education/Education';
import Achievement from './Componet/Achievement/Achievement';
import Projects from './Componet/Projects/Projects';

import Buttonholder from './Componet/Buttonholder';
import Payment from './Componet/Paymenr/Payment';
import PaymentHeader from './Componet/Paymenr/PaymentHeader';
import Paynow from './Componet/Paymenr/Patstackpay';
import Sucess from './Componet/Paymenr/Sucess';
import Counter from './Componet/Paymenr/Counter';
import Quote from './Componet/Paymenr/Quote';
import Stateman from './Componet/Paymenr/Stateman';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Mainbody} />
          <Route path='/BIOGRAPHY' exact component={Biography} />
          <Route path='/previous office' exact component={Office} />
          <Route path='/education history' exact component={Education} />
          <Route path='/achievements' exact component={Achievement} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/button' exact component={Buttonholder} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/header' exact component={PaymentHeader} />
          <Route path='/paystack' exact component={Paynow} />
          <Route path='/sucess' exact component={Sucess} />
          <Route path='/Counter' exact component={Counter} />
          <Route path='/Quote' exact component={Quote} />
          <Route path='/statess' exact component={Stateman} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
