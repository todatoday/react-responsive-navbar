import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Accueil from './Component/pages/Accueil';
import Apropos from './Component/pages/Apropos';
import Events from './Component/pages/Events';
import Services from './Component/pages/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (

    <Router >

        <Navbar />
      <div className="App">
        <Switch >
          <Route path="/" exact component={Accueil}></Route>
          <Route path="/Apropos" exact component={Apropos}></Route>
          <Route path="/Events" exact component={Events}></Route>
          <Route path="/Services" exact component={Services}></Route>





        </Switch>
      </div>
    </Router>


  );
}

export default App;
