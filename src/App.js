import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Test from './pages/experimenter/test'
import RecordPage from './pages/experimenter/recordPage'
import IndexExperiment from './pages/experimenter/index'
import VideoResult from './pages/uxer/videoResult'
import NotFound from './pages/error/not_found.js'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';

const Experimenter = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`} component={IndexExperiment} />
        <Route exact path={`${match.path}/record`} component={RecordPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Test} />
          <Route path='/experimenter' component={Experimenter} />
          <Route exact path='/testing/VideoResult' component={VideoResult} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;