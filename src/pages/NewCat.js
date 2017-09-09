import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Button,
  Alert,
  HelpBlock
} from 'react-bootstrap'

class NewCat extends Component {
  constructor(props){
  super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        city: '',
        about_me: '',
        looking_for: ''
        }
      }
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors){
      const errors = this.props.errors.filter(error => error.param === attribute )
      if(errors){
        errorString = errors.map(error => error.msg ).join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and suck it!.
              </Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup
              id="name-form-group"
              validationState={this.errorsFor('name') && 'error'}>
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('name') &&
                <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="age-form-group"
              validationState={this.errorsFor('name') && 'error'}>
              <ControlLabel id="age">Age</ControlLabel>
              <FormControl
                type="text"
                name="age"
                value={this.state.form.age}
                onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('age') &&
                <HelpBlock id="age-help-block">{this.errorsFor('age')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="city-form-group"
              validationState={this.errorsFor('city') && 'error'}>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                value={this.state.form.city}
                onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('city') &&
                <HelpBlock id="city-help-block">{this.errorsFor('city')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="about_me-form-group"
              validationState={this.errorsFor('about_me') && 'error'}>
              <ControlLabel id="about_me">About Me</ControlLabel>
              <FormControl
                type="textarea"
                name="about_me"
                value={this.state.form.about_me}
                onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('about_me') &&
                <HelpBlock id="about_me-help-block">{this.errorsFor('about_me')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup
              id="looking_for-form-group"
              validationState={this.errorsFor('looking_for') && 'error'}>
              <ControlLabel id="looking_for">Looking For</ControlLabel>
              <FormControl
                type="textarea"
                name="looking_for"
                value={this.state.form.looking_for}
                onChange={this.handleChange.bind(this)}
              />
              {this.errorsFor('looking_for') &&
                <HelpBlock id="looking_for-help-block">{this.errorsFor('looking_for')}</HelpBlock>
              }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button
              id="submit"
              onClick={this.handleSubmit.bind(this)}>Create Cat Profile</Button>
          </Col>
        </Row>

      </form>
    );
  }
}

export default NewCat
