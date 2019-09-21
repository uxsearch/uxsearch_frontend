import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import swal from 'sweetalert'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import Camera from '../../components/experiment/record/camera'
import Screen from '../../components/experiment/record/screen'
import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'

import '../../static/sass/experimenter/record.scss'

const modalSubmit = () => {
  swal({
    title: "Are you sure?",
    text: `You won't be able to reverse this!`,
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancel",
        value: null,
        visible: true,
      },
      confirm: {
        text: "Confirm",
        value: true,
        visible: true,
      }
    },
    dangerMode: false,
  }).then((willSubmit) => {
    if (willSubmit) {
      swal("Thank you very much", {
        icon: "success",
        timer: 1000,
        buttons: false
      });
    }
  });
}

class RecordPage extends React.Component {
  constructor(props) {
    super(props)
    const { match } = props
    console.log(match)
    this.state = {
      uxerId: '8t6UN47Z749qacrEvZ8O',
      projectId: 'a89OdndRvNEoasnHXfhu',
      experId: match.params.experId,
      project: undefined
    }
  }

  async componentDidMount() {
    this.getProject()
  }

  getProject = async (props) => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${this.state.projectId}`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET PROJECT')
      }
      this.setState({ project: response.data.data })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const project = this.state.project
    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='video-record' className='d-none d-md-block'>
          <NavbarExp />
          <Container>
            <Row>
              <Col xs={12}>
                <Row className='space-head-block'>
                  <Col xs={12}>
                    <p className='title'><span className='bold-text'>'{project && `${project.name}`}'</span> Usability Test Record</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} className='video-block'>
                    <Row>
                      <Col xs={12} md={6} className='text-center'>
                        <Camera uxerId={`${this.state.uxerId}`} projectId={`${this.state.projectId}`} />
                      </Col>
                      <Col xs={12} md={6} className='text-center'>
                        <Screen uxerId={`${this.state.uxerId}`} projectId={`${this.state.projectId}`} />
                      </Col>
                    </Row>
                    <br />
                    <Row className='justify-content-center'>
                      <Col xs={12} md={3} className='text-center'>
                        <Button type='submit' className='btn-finish-test' onClick={modalSubmit}>Finish Testing</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default withRouter(RecordPage)