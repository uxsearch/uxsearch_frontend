import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Test from './pages/experimenter/test'
import IndexExperiment from './pages/experimenter/index'
import Answer from './pages/experimenter/answer'
import RecordPage from './pages/experimenter/recordPage'
import VideoResult from './pages/uxer/videoResult'
import ExperPage from './pages/uxer/experimenterPage'
import ProjectPage from './pages/uxer/projectPage'
import NotFound from './pages/error/not_found.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/sass/customAll.scss'

const Experimenter = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`} component={IndexExperiment} />
        <Route exact path={`${match.path}/record`} component={RecordPage} />
        <Route exact path={`${match.path}/answer`} component={Answer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const UXer = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}/projects`} component={ProjectPage} />
        <Route exact path={`${match.path}/project/experiments`} component={ExperPage} />
        <Route exact path={`${match.path}/project/experiment/result`} component={VideoResult} />
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
          <Route path='/uxer' component={UXer} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;