import React from 'react';
import ReactDOM from 'react-dom';
import NewCat from '../NewCat';
import { mount } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewCat />, div)
})

it('has a age input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a name input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#about_me').text()).toBe("About Me")
})

it('has a submit button', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('button#submit').text()).toBe("Create Cat Profile")
})

it("calls submitHandler on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button: 0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})

it("passes values on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  component.find('input[name="name"]').simulate('change', {target: {value: 'Mr. Boots', name: 'name'}})
  component.find('input[name="age"]').simulate('change', {target: {value: 4, name: 'age'}})
  component.find('input[name="city"]').simulate('change', {target: {value: 'Bootstown', name: 'city'}})
  component.find('input[name="about_me"]').simulate('change', {target: {value: 'No walks on the beach.', name: 'about_me'}})
  component.find('input[name="looking_for"]').simulate('change', {target: {value: 'Not You', name: 'looking_for'}})
  component.find('button#submit').simulate('click', {button: 0})

  const submittedValues = mockSubmitHandler.mock.calls[0][0]

  expect(submittedValues["name"]).toBe("Mr. Boots")
  expect(submittedValues["age"]).toBe(4)
  expect(submittedValues["city"]).toBe("Bootstown")
  expect(submittedValues["about_me"]).toBe("No walks on the beach.")
  expect(submittedValues["looking_for"]).toBe("Not You")
})

it("shows flash message when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Please check the form and suck it!'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find(".alert-danger").length).toBe(1)
})

it("highlights name input when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#name-form-group.has-error').length).toBe(1)
})

it("no help message for name when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#name-help-block").length).toBe(0)
})

it("shows help message for name when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'Please check the form and suck it!.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#name-help-block").length).toBe(1)
})
