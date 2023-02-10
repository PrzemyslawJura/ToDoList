import { Component } from 'react';

const NewTodoForm = (props) => (
  <div>
        <input type='text' onChange={props.onChange} value={props.draft}/>
        <button onClick={props.onSubmit}>Add</button>
  </div>
)

export default NewTodoForm