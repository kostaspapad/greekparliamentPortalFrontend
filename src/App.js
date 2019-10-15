import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom"
import ConferenceLinksList from "./components/ConferenceLinksList";
import SpeakersList from "./components/SpeakersList";
import PartiesList from "./components/PartyList";
import Notfound from "./components/Notfound";
import Conference from "./components/Conference";
import SpeakerProfile from "./components/SpeakerProfile";
import Party from "./components/Party";
import Home from "./components/Home";
import About from "./components/About";
import Speech from "./components/Speech";
// import "../node_modules/typeface-roboto";
import PersistentDrawerLeft from "./layouts/PersistentDrawerLeft";
// import AppBar from "./layouts/SearchAppBar";
import AppBarDrawer from "./layouts/AppBarDrawer";
class App extends Component {
  render() {
    return (
        <div>
            {/* <PersistentDrawerLeft /> */}
            {/* <AppBar/> */}
            <AppBarDrawer />
      {/* <Router>
        <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/conferences">Conferences</Link>
            </li>
            <li>
                <Link to="/speakers">Speakers</Link>
            </li>
            <li>
                <Link to="/parties">Parties</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/conferences" component={ConferenceLinksList} />
            <Route path="/conference/:conference_date/speeches" component={Conference} />
            <Route path="/speakers" component={SpeakersList} />
            <Route path="/speaker/:speaker_id" component={SpeakerProfile} />
            <Route path="/parties" component={PartiesList}/>
            <Route path="/party/:party_id" component={Party} />
            <Route path="/speech/:speech_id" component={Speech} />
            <Route path="/about" component={About} />
            {/*  />
            <Route path="/party/:party_name" component="" />
            <Route path="/speech/:speech_id" component="" />
            <Route path="/news" component="" />
            <Route path="/contact" component="" />
            <Route path="/search" component="" /> }
            <Route component={Notfound} />
        </Switch>
        </div>
    </Router> */}
    </div>
    );
  }
}
export default App;