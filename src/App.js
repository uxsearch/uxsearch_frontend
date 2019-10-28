import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Test from './pages/experimenter/test'
import IndexExperiment from './pages/experimenter/index'
import Answer from './pages/experimenter/answer'
import ThanksPage from './pages/experimenter/thanks'
import RecordPage from './pages/experimenter/recordPage'
import VideoResult from './pages/uxer/videoResult'
import ExperPage from './pages/uxer/experimenterPage'
import ProjectPage from './pages/uxer/projectPage'
import NotFound from './pages/error/not_found.js'
import CreateQuestion from './pages/uxer/createQuestion'
import CreateTestnote from './pages/uxer/createTestnote'
import AnswerTestnote from './pages/uxer/answerTestnote'

import SignIn from './pages/uxer/signin'

import 'bootstrap/dist/css/bootstrap.min.css'
import './static/sass/customAll.scss'

const Experimenter = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`} component={IndexExperiment} />
        <Route exact path={`${match.path}/:experId/record`} component={RecordPage} />
        <Route exact path={`${match.path}/:experId/answer`} component={Answer} />
        <Route exact path={`${match.path}/:experId/thanks`} component={ThanksPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const UXer = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`} component={SignIn} />
        <Route exact path={`${match.path}/:id/projects`} component={ProjectPage} />
        <Route exact path={`${match.path}/:id/project/:projId/experiments`} component={ExperPage} />
        <Route exact path={`${match.path}/:id/project/:projId/experiment/:experId/result`} component={(VideoResult)} />
        <Route exact path={`${match.path}/:id/project/:projId/experiment/question`} component={CreateQuestion} />
        <Route exact path={`${match.path}/:id/project/:projId/experiment/testnote`} component={CreateTestnote} />
        <Route exact path={`${match.path}/:id/project/:projId/experiment/:experId/answertestnote`} component={AnswerTestnote} />
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