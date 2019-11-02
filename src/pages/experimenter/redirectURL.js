import React from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

class RedirectURL extends React.Component {
  constructor(props) {
    super(props)
    const { match } = props
    this.state = {
      uxerId: 'Ra5yR8oqRlP0Inxx1BJYzuupjoV2',
      path: match.params.url,
      project: undefined,
      redirect: false,
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${this.state.path}`)
      if (response.status !== 200) {
        throw new Error('CANNOT REDIRECT PAGE')
      }
      this.setState({ redirect: true })
      this.setState({ project: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { redirect, project } = this.state
    if (redirect && project) return <Redirect to={`/${project.id}/experimenter`} />
    return <></>
  }
}

export default withRouter(RedirectURL)