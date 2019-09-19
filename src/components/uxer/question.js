import React from 'react'
import { Row, Col, Form, FormGroup, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap'
import { withStyles, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faGripLines, faTextHeight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import '../../static/sass/uxer/createQuestion.scss'

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

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      type: props.type || 'Text box',
      option: props.option || 'AddOption',
      choice: [
        {
          name: 'option',
          value: ''
        }
      ],
    }
  }

  addOption() {
    if (this.state.option) {
      console.log('test Addoption')
      const option = 'AddOption'
      this.setState({
        choice: [...this.state.choice, {
          name: 'option',
          value: ''
        }]
      })
    }
  }

  render() {
    const type = this.state.type
    //const option = this.state.option
    return (
      <>
        {type === 'Text box' && (
          <>
            <Row className='question-block' >
              <Col xs={12}>
                <Form>
                  <FormGroup>
                    <Row className='justify-content-center'>
                      <Col xs={12} className='text-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs={12}>
                        <Row className='no-margin w-100'>
                          <Col xs={12} md={6} lg={8}>
                            <SearchField
                              id='standard-search'
                              label='Question'
                              type='search'
                              className='w-100 no-margin'
                              margin='normal'
                            />
                          </Col>
                          <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                            <Dropdown
                              isOpen={this.state.isOpen}
                              toggle={() => { this.setState({ isOpen: !this.state.isOpen }); }}
                            >
                              <DropdownToggle
                                tag='Dropdown'
                                onClick={this.toggleSort}
                                data-toggle='dropdown'
                                aria-expanded={this.state.isOpen}
                              >
                                <Col xs={12} md={12}>
                                  <Dropdown className='btn-multiple'>
                                    <FontAwesomeIcon icon={faTextHeight} size='1x' color='#efefef' className='textHeight' />
                                    {type}
                                    <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown' />
                                  </Dropdown>
                                </Col>
                              </DropdownToggle>
                              <DropdownMenu className='btn-secondary indropdown text-center '>
                                <DropdownItem onClick={() => this.setState({ type: 'Multiple choice' })}>
                                  <Dropdown >Multiple Choice</Dropdown>
                                </DropdownItem>
                                <DropdownItem onClick={() => this.setState({ type: 'Check box' })}>
                                  <Dropdown>Check box</Dropdown>
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col xs={12} md={12}>
                            <Input type='textbox' name='answer1' rows='5' className='text-style ' />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </>
        )}

        {type === 'Multiple choice' &&
          <>
            <Row className='question-block'>
              <Col xs={12}>
                <Form>
                  <FormGroup>
                    <Row className='justify-content-center'>
                      <Col xs={12} className='text-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs={12}>
                        <Row className='no-margin w-100'>
                          <Col xs={12} md={6} lg={8}>
                            <SearchField
                              id='standard-search'
                              label='Question'
                              type='search'
                              className='w-100 no-margin'
                              margin='normal'
                            />
                          </Col>
                          <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                            <Dropdown
                              isOpen={this.state.isOpen}
                              toggle={() => { this.setState({ isOpen: !this.state.isOpen }); }}
                            >
                              <DropdownToggle
                                tag='Dropdown'
                                onClick={this.toggleSort}
                                data-toggle='dropdown'
                                aria-expanded={this.state.isOpen}
                              >
                                <Col xs={12} md={12}>
                                  <Dropdown className='btn-multiple'>
                                    <FontAwesomeIcon icon={faCircle} size='1x' color='#efefef' className='textHeight' />Multiple Choice
                                    <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-mul' />
                                  </Dropdown>
                                </Col>
                              </DropdownToggle>
                              <DropdownMenu className='btn-secondary indropdown text-center '>
                                <DropdownItem onClick={() => this.setState({ type: 'Text box' })}>
                                  <Dropdown>Text box</Dropdown>
                                </DropdownItem>
                                <DropdownItem onClick={() => this.setState({ type: 'Check box' })}>
                                  <Dropdown>Check box</Dropdown>
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                        </Row>
                        <br />
                        {this.state.choice.map((choice, index) => (
                            <Row className='no-margin w-100' key={index}>
                              <Col xs={1}>
                                <FontAwesomeIcon icon={faCircle} size='2x' color='#ced4da' className='icon-mul-check' />
                              </Col>

                              {type === 'Multiple choice' && (
                                <>
                                  <Col xs={10} className='choice'>
                                    <Form>
                                      <FormGroup>
                                        <Input
                                          type='multiple'
                                          name={choice.name}
                                          placeholder='AddOption'
                                          value={choice.value}
                                          onChange={e => {
                                            this.state.choice[index].value = e.target.value
                                            this.setState({
                                              choice: [...this.state.choice]
                                            })
                                          }} />
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                </>
                              )}
                              <Col xs={1}>
                                <FontAwesomeIcon
                                  icon={faTimesCircle}
                                  size='2x'
                                  color='#909090'
                                  className='icon-delete'
                                  onClick={() => {
                                    this.state.choice.splice(index, 1)
                                    this.setState({
                                      choice: [...this.state.choice]
                                    })
                                  }}
                                />
                              </Col>
                            </Row>
                        ))}
                        <span onClick={() => this.addOption()} >AddOption</span>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </>
        }

        {type === 'Check box' && (
          <>
            <Row className='question-block'>
              <Col xs={12}>
                <Form>
                  <FormGroup>
                    <Row className='justify-content-center'>
                      <Col xs={12} className='text-center'>
                        <FontAwesomeIcon icon={faGripLines} size='2x' color='#efefef' />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col xs={12}>
                        <Row className='no-margin w-100'>
                          <Col xs={12} md={6} lg={8}>
                            <SearchField
                              id='standard-search'
                              label='Question'
                              type='search'
                              className='w-100 no-margin'
                              margin='normal'
                            />
                          </Col>
                          <Col xs={12} md={6} lg={4} className='text-center space-top-btn'>
                            <Dropdown
                              isOpen={this.state.isOpen}
                              toggle={() => { this.setState({ isOpen: !this.state.isOpen }); }}
                            >
                              <DropdownToggle
                                tag='Dropdown'
                                onClick={this.toggleSort}
                                data-toggle='dropdown'
                                aria-expanded={this.state.isOpen}
                              >
                                <Col xs={12} md={12}>
                                  <Dropdown className='btn-multiple'><FontAwesomeIcon icon={faSquare} size='1x' color='#efefef' className='textHeight' />CheckBox
                                  <FontAwesomeIcon icon={faSortDown} size='1x' color='#efefef' className='sortdown-check' />
                                  </Dropdown>
                                </Col>
                              </DropdownToggle>
                              <DropdownMenu className='btn-secondary indropdown text-center '>
                                <DropdownItem onClick={() => this.setState({ type: 'Text box' })}>
                                  <Dropdown>Text box</Dropdown>
                                </DropdownItem>
                                <DropdownItem onClick={() => this.setState({ type: 'Multiple choice' })}>
                                  <Dropdown>Multiple Choice</Dropdown>
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                        </Row>
                        <br />
                        <Row className='no-margin w-100'>
                          <Col xs={1}>
                            <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                          </Col>
                          <Col xs={10} className='choice'>
                            <Form>
                              <FormGroup>
                                <Input type='multiple' name='choice1' id='exampleMultiple' placeholder='Choice1' />
                              </FormGroup>
                            </Form>
                          </Col>

                          <Col xs={1}>
                            <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                          </Col>
                        </Row>
                        <Row className='no-margin w-100'>
                          <Col xs={1}>
                            <FontAwesomeIcon icon={faSquare} size='2x' color='#ced4da' className='icon-mul-check' />
                          </Col>
                          <Col xs={10} className='choice'>
                            <Form>
                              <FormGroup>
                                <Input type='multiple' name='choice5' id='exampleMultiple' placeholder='AddOption' />
                              </FormGroup>
                            </Form>
                          </Col>
                          <Col xs={1}>
                            <FontAwesomeIcon icon={faTimesCircle} size='2x' color='#909090' className='icon-delete' />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </>
        )}
      </>
    )
  }
}

export default Question