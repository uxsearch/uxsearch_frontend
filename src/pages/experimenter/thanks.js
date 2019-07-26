import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import NavbarExp from '../../components/utils/navbarExperimenter'
import NotSupport from '../../components/utils/notSupport'
import ThanksBlock from '../../components/experiment/thankBlock'

import '../../static/sass/experimenter/thanks.scss'

class ThanksPage extends React.Component {
  render() {
    return (
      <div>
        <NotSupport className='d-md-none' />
        <section id='thanks-page'>
          <NavbarExp />
          <Container>
            <Row>
              <Col xs={12}>
                <ThanksBlock />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export default ThanksPage