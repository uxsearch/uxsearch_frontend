import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

class NotSupport extends React.Component {
  render() {
    return (
      <section id='not-support' className='d-md-none'>
        <Container fluid>
          <Row className='block'>
            <Col xs={12} className='not-support text-center'>
              <FontAwesomeIcon icon={faMobileAlt} size='4x' className='icon-not-support' />
              <p className='text-not-support'>Not Support Mobile</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default NotSupport