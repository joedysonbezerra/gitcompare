import React, {Component} from 'react';
import logo from '../../assets/logo.png'
import {Container, Form} from './style'
import CompareList from '../../components/CompareList'

export default class Main extends Component{
  state={
    	repositories:[]

      ],
  }

  render() {
    return(
      <Container>
      <img src={ logo } alt="Github Compare"/>
      <Form>
        <input type="text" placeholder="Usuário/Repositório"/>
        <button type="submit">OK</button>
      </Form>

      <CompareList repositories={this.state.repositories} />
    </Container>
    );
  }
}
