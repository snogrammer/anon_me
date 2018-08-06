import React, { Component } from 'react'
import { Container, Header, Grid, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(){
    super()
    this.state = {}
    this.getDigital = this.getDigital.bind(this)
  }

  componentDidMount(){
    this.getDigital()
  }

  fetch(endpoint){
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getDigital(){
    this.fetch('/api/info/digital')
      .then(digital => this.setState({digital: digital}))
  }

  render() {
    let { digital } = this.state

    return digital
      ? <Container text textAlign='center'>
          <Header as='h1' icon>
            <Icon name='spy' circular />
            <Header.Content>
              Anonymize Me
            </Header.Content>
          </Header>

          <Header as='h4'>
            Take Back Your Identity. Protect Your Privacy.

            <Header.Content as='small'>
              Protect yourself from hackers and companies selling your data by randomizing
              usernames, emails, and passwords for every site you sign up.
            </Header.Content>
          </Header>

          <Divider hidden section />

          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' icon>
                  <Icon name='user' />
                  <Header.Content>
                    {digital.username}
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as='h3' icon>
                  <Icon name='key' />
                  <Header.Content>
                    {digital.password}
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as='h3' icon>
                  <Icon name='mail' />
                  <Header.Content as={Link} to={digital.href} target='_blank'>
                    {digital.email}
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Button size='massive' floated='right' circular icon='redo' onClick={() => this.getDigital()} />
        </Container>

        : <Container text>
            <Dimmer active inverted>
              <Loader content='Loading' />
            </Dimmer>
          </Container>
  }
}

export default Home;
