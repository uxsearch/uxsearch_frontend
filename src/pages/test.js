import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Test test page</h1>
        <a href='/testing/record'>
          <Button className='btn btn-success'>
            Start Record
          </Button>
        </a>
      </div>
    )
  }
}

export default Test