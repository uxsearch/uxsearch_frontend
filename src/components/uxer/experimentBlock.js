import React from 'react'
import { Row, Col } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/experPage.scss'

const ExperBlock = (props) => {
  return (
    <div className='text-center profile'>
      <a href={props.link} className='link'>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <Row className='justify-content-center'>
              <Col xs={12} className='profile-block'>
                <FontAwesomeIcon icon={faUserCircle} className='logo-icon-user' />
              </Col>
            </Row>
            <Row className='justify-content-center text-box-name'>
              <Col xs={12}>
                <p className='no-margin'>{props.firstname}</p>
                <p className='no-margin'>{props.lastname}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </a>
    </div>
  )
}

export default ExperBlock;