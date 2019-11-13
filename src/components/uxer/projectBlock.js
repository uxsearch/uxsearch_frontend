import React from 'react'

import { Form, Field } from 'react-final-form'
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, Button, Label } from 'reactstrap'
import { TextField, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faTrash, faShare, faEdit, faBook, faLink, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import '../../static/sass/uxer/projectPage.scss'

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


class ProjectBlock extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      projectId: props.projectId,
      projectName: props.title,
      projectLink: props.LinkUrl,
      projectDescription: props.description,
      projectCover: props.imgUrl,
      dropdownOpen: false,
      statusRemove: undefined,
      modal: false,
      file: null,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  blockRemove = (projectId) => {
    const statusRemove = true
    const project = { projectId: projectId }
    this.props.removeProject(project, statusRemove)
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  updateProject = (values) => {
    values = {
      ...values,
      name: this.state.projectName,
      description: this.state.projectDescription,
    }
    if (this.state.file === null) {
      values = {
        ...values,
        cover_url: this.state.projectCover
      }
    }
    this.props.updateProject(values, this.state.file, this.state.projectId)
    this.setState({ modal: false })
  }

  handleNameChange = (event) => {
    this.setState({ projectName: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ projectDescription: event.target.value });
  };

  handleImageChange = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  };

  render() {
    const { projectId, projectLink, projectName, projectDescription, projectCover } = this.state

    let { imagePreviewUrl } = this.state;
    let $imagePreview = projectCover;
    if (imagePreviewUrl || projectCover) {
      $imagePreview = (<img src={projectCover ? projectCover : imagePreviewUrl} />);
    } else {
      $imagePreview = (<img src={projectCover && projectCover} />);
    }

    return (
      <div className='project'>
        <Row className='justify-content-center'>
          <Col xs={12} className='each-block'>
            <Row>
              <Col xs={12} className='cover-block'>
                <a href={this.props.url} className='link'>
                  <img
                    src={this.props.imgUrl}
                    className="cover-img d-inline-block"
                    alt="Project Cover"
                  />
                </a>
              </Col>
            </Row>
            <Row className='justify-content-center align-items-center'>
              <Col xs={10} className=''>
                <a href={this.props.url} className='link'>
                  <p className='no-margin project-text'>{this.props.title}</p>
                </a>
              </Col>
              <Col xs={2} className='text-center'>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                  >
                    <FontAwesomeIcon icon={faEllipsisV} size="1x" color='#303030' className='dropdown-btn' />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => this.toggleModal()}>
                      <FontAwesomeIcon icon={faEdit} color='#D42B2B' size='sm' className='space-icon' />
                      <span>Edit Project </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FontAwesomeIcon icon={faShare} color='#303030' size='sm' className='space-icon' />
                      <span>Send link to experimenter</span>
                    </DropdownItem>
                    <DropdownItem onClick={() => this.blockRemove(projectId)}>
                      <FontAwesomeIcon icon={faTrash} color='#D42B2B' size='sm' className='space-icon' />
                      <span className='delete-text'>Delete Project</span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <section id='update-modal'>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className='modal-dialog-centered'>
            <ModalBody>
              <Form
                onSubmit={this.updateProject}
                render={({
                  handleSubmit, form, submitting, pristine
                }) => (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12}>
                          <Field component='input' type='image' name='cover_url' />
                          <Row className='justify-content-center'>
                            <Col xs={12} className='text-center img-block'>
                              <div className='cover-size' alt='Project Cover'>
                                {$imagePreview}
                              </div>
                              <br></br>
                              <input type="file" name="file" onChange={(event) => this.handleImageChange(event)} />
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
                                                    value={projectName}
                                                    onChange={this.handleNameChange}
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
                                      <FontAwesomeIcon icon={faPencilAlt} size='1x' color='#303030' />
                                    </Col>
                                    <Col xs={10} className='text-center'>
                                      <Field name='description' type='text'>
                                        {({ input, meta }) => (
                                          <>
                                            <Row className='align-items-center'>

                                              <Col xs={12}>
                                                <Label className=' w-100'>
                                                  <TextInput {...input}
                                                    id='standard-description'
                                                    label='Project Description'
                                                    value={projectDescription}
                                                    onChange={this.handleDescriptionChange}
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
                                                    value={projectLink}
                                                    type='text'
                                                    className='w-100 create-form space-bottom'
                                                    margin='normal'
                                                    readonly
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
                                  <Button className='w-100 create-project-btn' type='submit'>Update Project</Button>
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
      </div >
    )
  }
}

export default ProjectBlock;