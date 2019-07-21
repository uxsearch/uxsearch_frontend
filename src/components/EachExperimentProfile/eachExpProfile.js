import React from 'react'
import { Container, Row, Col, Input, Label } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCopy } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/videoResult.scss'


class EachExpPro extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={1}>
                            <FontAwesomeIcon icon={faSearch} size="2x" color='#303030' /> <br></br>
                        </Col>
                        <Col md={2}>
                            <Label className='w-100'>
                                <Input type='text' id='search' name='search' placeholder='Search Result' />
                            </Label>
                        </Col>

                        <Col xs={3} >
                            <span>Share for Test : </span>
                        </Col>
                        <Col xs={5} >
                            <Label className='w-100'>
                                <Input type='text' id='url' name='url' placeholder='https://uxsearch.io/2Ri5jP' />
                                <FontAwesomeIcon icon={faCopy} size="2x" color='#28a1f2' /> <br></br>
                            </Label>
                        </Col>
                    </Row>





                </Container>
            </div >
        )
    }
}

export default EachExpPro;