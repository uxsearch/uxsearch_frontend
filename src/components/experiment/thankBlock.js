import React from 'react'
import { Container, Row, Col } from 'reactstrap'

class ThanksBlock extends React.Component {
  render() { 
    return (
      <Row className='space-head-block'>
        <Col xs={12} className='block'>
          <Row>
            <Col xs={12}>
              <p class='title'>Thank You.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>Your feedback is important for us. thank you very much.</p>
            </Col>
          </Row>
          <hr />
        </Col>
      </Row>
    )
  }
}
 
export default ThanksBlock