import React from 'react'
import { Container, Row, Col, Input, Label } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy, faShare } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'
import APIUPI from '../../utils/apiuri'

import NavbarUxer from '../../components/utils/navbarUXer'
import SubNavbar from '../../components/utils/subNavbar';
import ExperBlock from '../../components/uxer/experimentBlock'

import '../../static/sass/uxer/experPage.scss'

const SearchField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#28a1f2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#28a1f2',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#28a1f2',
      },
    },
  },
})(TextField);

class ExperPage extends React.Component {
  constructor(props) {
    super(props)
    const { match } = props
    this.state = {
      uxerId: match.params.id,
      projectId: match.params.projId,
      project: undefined,
      experList: [],
    }
  }

  componentDidMount() {
    this.getAllExperiment()
    this.getProject()
  }

  getProject = async () => {
    try {
      const response = await axios.get(`${APIUPI.UXER}${this.state.uxerId}/${APIUPI.ONE_PROJECT}${this.state.projectId}`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET PROJECT')
      }
      this.setState({ project: response.data.data })
    } catch (e) {
      console.error(e)
    }
  }

  getAllExperiment = async () => {
    try {
      const response = await axios.get(`${APIUPI.UXER}${this.state.uxerId}/${APIUPI.ONE_PROJECT}${this.state.projectId}/experimenters`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET ALL EXPERIMENT OF THIS PROJECT')
      }
      this.setState({ experList: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { project, experList, uxerId, projId } = this.state

    return (
      <section id='exper-page'>
        <NavbarUxer title={`${project && project.name}`} />
        <SubNavbar uxerId={`${uxerId}`} projId={`${projId}`} />
        <Container>
          <Row className='space-head-block justify-content-center align-items-end'>
            <Col xs={10} md={4}>
              <form autoComplete='on'>
                <Row className='align-items-end no-gutters'>
                  <Col xs={2} sm={1} md={2} className='text-center'>
                    <FontAwesomeIcon icon={faSearch} size='1x' color='#303030' />
                  </Col>
                  <Col xs={10} sm={11} md={10}>
                    <SearchField
                      id='standard-search'
                      label='Search Experiment'
                      type='search'
                      className='w-100 search-form no-margin'
                      margin='normal'
                    />
                  </Col>
                </Row>
              </form>
            </Col>
            <Col xs={2} sm={1} className='d-md-none no-padding'>
              <div className='share-block'>
                <FontAwesomeIcon icon={faShare} size="1x" color='#fff' className='share-icon' />
              </div>
            </Col>
            <Col md={2} className='d-none d-md-block' />
            <Col md={6} className='d-none d-md-block'>
              <Row className='justify-content-end align-items-center'>
                <Col md={5} lg={4} className='text-right'>
                  <p className='no-margin'>Share Test: </p>
                </Col>
                <Col md={5} lg={6} className='no-padding'>
                  <Label className='no-margin w-100' >
                    <Input type='text' id='share' name='share_url' value={`${project && project.link_url}`} className='share' alt={`${project && project.link_url}`} readOnly />
                  </Label>
                </Col>
                <Col md={1} className='no-padding'>
                  <div className='copy-block'>
                    <FontAwesomeIcon icon={faCopy} size="1x" color='#fff' className='copy-icon' />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            {experList.map(experiment => (
              <>
                <Col xs={6} md={4} lg={3} key={experiment.id}>
                  <ExperBlock
                    link={`/uxer/${this.state.uxerId}/project/${this.state.projectId}/experiment/${experiment.data.experimenter_key}/result`}
                    imgUrl={'https://picsum.photos/200/300'}
                    firstname={experiment.data.firstname}
                    lastname={experiment.data.lastname}
                  />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
}

export default ExperPage;