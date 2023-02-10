import { Component } from 'react';
import ToDoItem from '../../components/ToDoItem';
import NewTodoForm from '../../components/NewTodoForm';

class ToDoList extends Component {
  static defaultProps = {
    tasks: [
      {done: true, text: 'Recod a ReactJS video'},
      {done: false, text: 'Go for a walk'}
      ],
    title: 'My Stuff'
  }

  //state odpowiada za stan zmiennej, czyli taka dynamiczna zmienna
  state = {
    // przekazanie propsa czyli zmiennej która jest stała
    tasks : this.props.tasks,
    draft: ''
  }

  updateDraft = (event) => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const { tasks, draft } = this.state
    const list = tasks
    list.push({text: draft, done: false})
    this.setState({tasks: list, draft: ''})
  }

  render() {
    const { title } = this.props
    const { tasks, draft } = this.state

    return (
      <div>
        <h1>{title}</h1>
        {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
        <NewTodoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft} />
      </div>
    )
  }
}

export default ToDoList