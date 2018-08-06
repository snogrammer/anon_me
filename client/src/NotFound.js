import React, { Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render () {
    return <Container text textAlign='center'>
      <h1>404</h1>
      <h2>Not found</h2>
      <Button as={Link} to='/'>Back to home</Button>
    </Container>
  }
}

export default NotFound
