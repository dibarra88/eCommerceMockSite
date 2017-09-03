import React, { Component } from 'react';
import '../styles/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Home';
import Collars from './Collars';
import Cart from './Cart';
import Details from './Details';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Bowls from './Bowls';
import Carriers from './Carriers';

class App extends Component {
  render() {
    return (
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/collars" component={Collars} />
            <Route path="/bowls" component={Bowls} />
            <Route path="/carriers" component={Carriers} />
            <Route path="/cart" component={Cart} />
            <Route path="/details/:endpoint/:id" component={Details} />
          </Switch>
        </BaseLayout>
      </Router>
    );
  }
}

export default App;
