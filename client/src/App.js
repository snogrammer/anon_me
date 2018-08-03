import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';

class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.getDigital = this.getDigital.bind(this);
    // this.getPhysical = this.getPhysical.bind(this);
  }

  componentDidMount(){
    this.getDigital();
  }

  fetch(endpoint){
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getDigital(){
    this.fetch('/api/info/digital')
      .then(digital => this.setState({digital: digital}));
  }

  render() {
    let { digital } = this.state;

    return digital
      ? <Container text textAlign='center'>
          <Header as='h1' icon>
            <Icon name='spy' circular />
            <Header.Content>
              Anonymize Me
            </Header.Content>
          </Header>

          <Header as='h5'>
            Protect your privacy and take back control of your data
          </Header>

          <Divider hidden section />

          <Container>
            <Header as='h3' icon>
              <Icon name='user' />
              <Header.Content>
                {digital.username}
              </Header.Content>
            </Header>
          </Container>

          <Container>
            <Header as='h3' icon href={digital.href}>
              <Icon name='key' />
              <Header.Content>
                {digital.password}
              </Header.Content>
            </Header>
          </Container>

          <Container>
            <Header as='h3' icon>
              <Icon name='mail' />
              <Header.Content>
                {digital.email}
              </Header.Content>
            </Header>
          </Container>

        </Container>
        : <Container text>
            <Dimmer active inverted>
              <Loader content='Loading' />
            </Dimmer>
          </Container>
  }
}

export default App;
