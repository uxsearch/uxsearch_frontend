import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
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
import MyAccount from './pages/uxer/myAccount'

import 'bootstrap/dist/css/bootstrap.min.css'
import './static/sass/customAll.scss'
import redirectURL from './pages/experimenter/redirectURL';

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

const UXer = (match) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={`${match.path}/:id/projects`} component={ProjectPage} />
        <PrivateRoute exact path={`${match.path}/:id/project/:projId/experiments`} component={ExperPage} />
        <PrivateRoute exact path={`${match.path}/:id/project/:projId/experiment/:experId/result`} component={(VideoResult)} />
        <PrivateRoute exact path={`${match.path}/:id/project/:projId/experiment/question`} component={CreateQuestion} />
        <PrivateRoute exact path={`${match.path}/:id/project/:projId/experiment/testnote`} component={CreateTestnote} />
        <PrivateRoute exact path={`${match.path}/:id/project/:projId/experiment/:experId/answertestnote`} component={AnswerTestnote} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const AuthService = {
  isAuthenticated: () => {
    if (localStorage.getItem('token')) {
      // MARK: have token
      return true
    }
    // MARK: otherwise
    return false
  },
  // isAuthenticated: false,
  authenticate(cb) {
    console.log(cb)
    AuthService.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    AuthService.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = AuthService.isAuthenticated()
  console.log(isLoggedIn)
  console.log('rest', rest)
  return (
    <Route
      render={({ location }) =>
        isLoggedIn ? (
          <Component {...rest} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
      }
    />
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Test} />
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/:projId/experimenter' component={Experimenter} />
          <Route exact path='/:url' component={redirectURL} />
          <PrivateRoute exact path='/uxer' component={UXer} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;