import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const Strength1 = [
  { key: '1', text: 'HTML-GIT-CSS', value: 'HTML-GIT-CSS' },
  { key: '2', text: 'CSS-Bootstrap', value: 'CSS-Bootstrap' },
  { key: '3', text: 'JavaScript', value: 'JavaScript' },
  { key: '4', text: 'Web-APIs', value: 'Web-APIs' },
  { key: '5', text: 'Third-Party-APIs', value: 'Third-Party-APIs' },
  { key: '6', text: 'Server-Side-APIs', value: 'Server-Side-APIs' },
  { key: '7', text: 'NodeJS', value: 'NodeJS' },
  { key: '8', text: 'Object-Oriented-Programming', value: 'Object-Oriented-Programming' },
  { key: '9', text: 'Express', value: 'Express' },
  { key: '10', text: 'MySQL', value: 'MySQL' },
  { key: '11', text: 'MVC', value: 'MVC' },
  { key: '12', text: 'React', value: 'React' },
  { key: '13', text: 'State', value: 'State' },
];

const Weakness1 = [
  { key: '1', text: 'HTML-GIT-CSS', value: 'HTML-GIT-CSS' },
  { key: '2', text: 'CSS-Bootstrap', value: 'CSS-Bootstrap' },
  { key: '3', text: 'JavaScript', value: 'JavaScript' },
  { key: '4', text: 'Web-APIs', value: 'Web-APIs' },
  { key: '5', text: 'Third-Party-APIs', value: 'Third-Party-APIs' },
  { key: '6', text: 'Server-Side-APIs', value: 'Server-Side-APIs' },
  { key: '7', text: 'NodeJS', value: 'NodeJS' },
  { key: '8', text: 'Object-Oriented-Programming', value: 'Object-Oriented-Programming' },
  { key: '9', text: 'Express', value: 'Express' },
  { key: '10', text: 'MySQL', value: 'MySQL' },
  { key: '11', text: 'MVC', value: 'MVC' },
  { key: '12', text: 'React', value: 'React' },
  { key: '13', text: 'State', value: 'State' },
];

const FormExampleFieldControlId = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={Strength1}
        label={{ children: 'Strength', htmlFor: 'form-select-control-gender' }}
        placeholder='Strength'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
      <Form.Field
        control={Select}
        options={Weakness1}
        label={{ children: 'Weakness', htmlFor: 'form-select-control-gender' }}
        placeholder='Weakness'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Bio'
      placeholder='Write a short description'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joey@fullstack.com'
      // error={{
      //   content: 'Please enter a valid email address',
      //   pointing: 'above',
      // }}
    />
    <Form.Field
      id='form-input-control-last-name'
      control={Input}
      label='Github Username'
      placeholder='janey123'
      // error={{
      //   content: 'Please enter a valid Github username',
      //   pointing: 'above',
      // }}
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Label with htmlFor'
    />
  </Form>
)

export default FormExampleFieldControlId;