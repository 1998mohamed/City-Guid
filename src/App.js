
import './App.css';
import Navbar from "./components/layouts/Navbar";
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/layouts/Footer";
import { Switch , Route} from "react-router-dom"; 
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import PageNotFound from "./components/pages/PageNotFound";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={ Home } />
          <Route path="/news" component={ News } />
          <Route path="/contacts" component={ Contacts } />
          <Route path="/details" component={ Details } />
          <Route path="/page-not-found" component={ PageNotFound } />
        </Switch>
        <Footer />
      </div>    
      );
  }
}

export default App;
