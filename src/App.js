import React, { Component } from 'react';
import './App.css';
import List from './List';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Grid, Form, Col, Container, Row } from 'reactstrap';

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
    event.preventDefault();
    this.setState({
      list_term: '',
      list_array: [...this.state.list_array, this.state.list_term]
    });
    // console.log(this.state.list_array);
  }

  render() {
    return (
        <Container>
            <div className="row input-button">
                <Col xl={8}>
                    <input className="form-control float-left" value={this.state.list_term} onChange={this.onChange}  required />
                </Col>
                <Col xl={4}>
                    <Button size="lg" className="add-button" color="success" onClick={this.onSubmit}>Add</Button>
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