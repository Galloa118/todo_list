import React, { Component } from 'react';
import { Button, Input, Grid, Form, Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_term: '',
      list_array: []
    };
  }
  onChange = (event) => {
    this.setState({ list_term: event.target.value });
  }

  onSubmit = (event) => {
    // event.preventDefault();
    if(this.state.list_term == '') {
      alert('Input value is not empty!');
    } else {
      this.setState({
        list_term: '',
        list_array: [...this.state.list_array, this.state.list_term]
      });
    }
    // console.log(this.state.list_array);
  }

  render() {
    return (
      <Container>
        <h1><center>Todo List</center></h1>
        <div className="row input-button">
          <Col xl={8}>
            <Input className="form-control float-left" placeholder="Insert here..." value={this.state.list_term} onChange={this.onChange} />
          </Col>
          <Col xl={4}>
            <Button size="lg" className="btn-block" color="success" onClick={this.onSubmit}>Add</Button>
          </Col>
        </div>
        <div className="row">
          <Col xl={8}>
              <List list_array={this.state.list_array} />
          </Col>
        </div>
      </Container>
    );
  }
}
export default App;