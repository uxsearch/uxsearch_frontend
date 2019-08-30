import React from 'react'
import { Row, Col } from 'reactstrap'

import '../../static/sass/uxer/experPage.scss'

const ExperBlock = (props) => {
  return (
    <div className='text-center profile'>
      <a href={props.link} className='link'>
        <Row className='justify-content-center'>
          <Col xs={12}>
            <Row className='justify-content-center'>
              <Col xs={12} className='profile-block'>
                <img
                  src={props.imgUrl}
                  className="profile-img"
                  alt="Profile"
                />
              </Col>
            </Row>
            <br />
            <Row className='justify-content-center'>
              <Col xs={12}>
                <p className='no-margin'>{props.firstname} {props.lastname}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </a>
    </div>
  )
}

export default ExperBlock;