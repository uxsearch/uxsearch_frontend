import React from 'react'
import { Redirect } from 'react-router'
import { Form, Field } from 'react-final-form'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, Button, Label } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBook, faLink, faCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'
import APIURI from '../../utils/apiuri'

import NavbarUxer from '../../components/utils/navbarUXer'
import ProjectBlock from '../../components/uxer/projectBlock'

import '../../static/sass/uxer/projectPage.scss'

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

const TextInput = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#28a1f2'
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

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props
    this.toggleSort = this.toggleSort.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      uxerId: match.params.id,
      projectList: [],
      sortDropdownOpen: false,
      modal: false,
      redirect: false,
      childProject : {
        projectId: undefined,
        statusRemove: undefined
      }
    };
  }

  toggleSort() {
    this.setState(prevState => ({
      sortDropdownOpen: !prevState.sortDropdownOpen
    }));
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    this.getProject()
  }

  changeUnmountOnClose(e) {
    let value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  getProject = async () => {
    try {
      const response = await axios.get(`${APIURI.UXER}${this.state.uxerId}/${APIURI.PROJECT}`)
      if (response.status !== 200) {
        throw new Error('CANNOT GET ALL PROJECT')
      }
      this.setState({ projectList: response.data })
    } catch (e) {
      console.error(e)
    }
  }

  submitCreateProject = async (values) => {
    try {
      const response = await axios.post(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}add/`, values)
        .then(result => {
          this.setState({ redirect: true })
          return result
        })
      if (response.status !== 201) {
        throw new Error('CANNOT CREATE UXER')
      }
      this.props.history.push(`/${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${response.data.projects.id}/experiments`)
    } catch (e) {
      console.error(e)
    }
  }

  removeProject = async (projectId,statusRemove) => {
    try {
      if(statusRemove === true) {
        const response = await axios.delete(`${APIURI.UXER}${this.state.uxerId}/${APIURI.ONE_PROJECT}${projectId}/delete`, `${projectId}`)
        console.log('response status',response.status);
        if (response.status !== 200) {
          throw new Error('CANNOT DELETE PROJECT')
        }
      }
		}catch (e){
		  console.log(e)
		}
  }

  render() {
    const projectList = this.state.projectList
    const redirect = this.state.redirect

    // if (redirect) return <Redirect to={`/${APIURI.UXER}${this.state.uxerId}/${APIURI.PROJECT}`} />

    return (
      <div>
        <section id='project-page'>
          <NavbarUxer title='My Projects' />
          <Container>
            <Row>
              <Col xs={11} sm={10} md={11}>
              </Col>
              <Col xs={1} sm={2} md={1} onClick={this.toggleModal}>
                <FontAwesomeIcon icon={faCircle} size='3x' color='#28a1f2' className='circle' />
                <FontAwesomeIcon icon={faPlus} size='1x' color='#fff' className='plus' />
              </Col>
            </Row>
            <Row className='space-head-block justify-content-center align-items-end'>
              <Col xs={8}>
                <form autoComplete='on'>
                  <Row className='align-items-end no-gutters'>
                    <Col xs={2} sm={1} className='text-center'>
                      <FontAwesomeIcon icon={faSearch} size='1x' color='#303030' />
                    </Col>
                    <Col xs={10} sm={11}>
                      <SearchField
                        id='standard-search'
                        label='Search Projects'
                        type='search'
                        className='w-100 search-form no-margin'
                        margin='normal'
                      />
                    </Col>
                  </Row>
                </form>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Row className='justify-content-center align-items-center'>
                  <Col xs={12} className='text-center'>
                    <Dropdown
                      isOpen={this.state.sortDropdownOpen}
                      toggle={() => { this.setState({ sortDropdownOpen: !this.state.sortDropdownOpen }); }}
                    >
                      <DropdownToggle caret
                        tag="span"
                        onClick={this.toggleSort}
                        data-toggle="dropdown"
                        aria-expanded={this.state.sortDropdownOpen}
                        className='dropdown-btn'
                      >
                        <span>Recent</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <span>Recent</span>
                        </DropdownItem>
                        <DropdownItem>
                          <span>A to Z</span>
                        </DropdownItem>
                        <DropdownItem>
                          <span>Z to A</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <br />
          <Container>
            <Row>
              {
                projectList.length !== 0 ? (
                  <>
                    {projectList.map(project => (
                      <>
                        <Col xs={12} sm={6} md={4} lg={3} key={project.id}>
                          <ProjectBlock
                            url={`/uxer/${this.state.uxerId}/project/${project.id}/experiments`}
                            title={project.data.name}
                            imgUrl={project.data.cover_url}
                            projectId={project.id} 
                            removeProject={this.removeProject}
                          />
                        </Col>
                      </>
                    ))}
                  </>
                ) : (
                    <>
                      <Col xs={12} className='text text-center'>
                        <p>You don't have any project. You can <span className='createProject' onClick={this.toggleModal}>create a project.</span></p>
                      </Col>
                    </>
                  )
              }
            </Row>
          </Container>
        </section>
        <section id='create-modal'>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className='modal-dialog-centered'>
            <ModalBody>
              <Form
                onSubmit={this.submitCreateProject}
                render={({
                  handleSubmit, form, submitting, pristine
                }) => (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12}>
                          <Field component='input' type='hidden' name='cover_url' initialValue={`https://picsum.photos/500/300`} />
                          <Row className='justify-content-center'>
                            <Col xs={12} className='text-center img-block'>
                              <img
                                src='https://picsum.photos/500/300'
                                className='cover-size'
                                alt='Project Cover'
                              ></img>
                            </Col>
                          </Row>
                          <Row className='justify-content-center'>
                            <Col xs={12}>
                              <Row className='justify-content-center'>
                                <Col xs={12} md={11}>
                                  <Row className='justify-content-center align-items-end no-gutters'>
                                    <Col xs={2} className='text-center'>
                                      <FontAwesomeIcon icon={faBook} size='1x' color='#303030' />
                                    </Col>
                                    <Col xs={10} className='text-center'>
                                      <Field name='name' type='text'>
                                        {({ input, meta }) => (
                                          <>
                                            <Row className='align-items-center'>

                                              <Col xs={12}>
                                                <Label className='w-100'>
                                                  <TextInput {...input}
                                                    id='standard-name'
                                                    label='Project Name'
                                                    type='text'
                                                    className='w-100 create-form space-bottom'
                                                    margin='normal'
                                                    required
                                                  />
                                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                                </Label>
                                              </Col>
                                            </Row>
                                          </>
                                        )}
                                      </Field>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <Row className='justify-content-center'>
                                <Col xs={12} md={11}>
                                  <Row className='justify-content-center align-items-end no-gutters'>
                                    <Col xs={2} className='text-center'>
                                      <FontAwesomeIcon icon={faLink} size='1x' color='#303030' />
                                    </Col>
                                    <Col xs={10} className='text-center'>
                                      <Field name='file_url' type='text'>
                                        {({ input, meta }) => (
                                          <>
                                            <Row className='align-items-center'>

                                              <Col xs={12}>
                                                <Label className=' w-100'>
                                                  <TextInput {...input}
                                                    id='standard-link'
                                                    label='Link Path'
                                                    type='text'
                                                    className='w-100 create-form space-bottom'
                                                    margin='normal'
                                                    required
                                                  />
                                                  {meta.touched && meta.error && <span>{meta.error}</span>}
                                                </Label>
                                              </Col>
                                            </Row>
                                          </>
                                        )}
                                      </Field>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <br />
                              <Row className='justify-content-center'>
                                <Col xs={12}>
                                  <Button className='w-100 create-project-btn' type='submit' >Create Project</Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </form>
                  )}
              />
            </ModalBody>
          </Modal>
        </section>
      </div>
    )
  }
}

export default ProjectPage;