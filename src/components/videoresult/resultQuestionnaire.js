import React from 'react'
import { Row, Col, Container, Button, Input } from 'reactstrap'

import '../../static/sass/uxer/videoResult.scss'

class ResultQuestion extends React.Component {
    render() {
        return (
            <div>
                <Container className='bg-questionnaire'>
                    <Row>
                        <Col md={12}>
                            <h2>Result of Questionnaire</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <br />
                            <span>1. What you expect in this program?</span>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknow printer took a galley of type and scrambled it to make a type specimen </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <span>2. Would you like to recommend something more?</span>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknow printer took a galley of type and scrambled it to make a type specimen </p>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default ResultQuestion