import { Component } from 'react';

class ToDoList extends Component {
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
    list.push(draft)
    this.setState({tasks: list, draft: ''})
  }

  render() {
    const { title } = this.props
    const { tasks, draft } = this.state

    return (
      <div>
        <h1>{title}</h1>
        {tasks.map(task => <div><p>{task}</p></div>)}
        <input type='text' onChange={this.updateDraft} value={draft}/>
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}

function App() {
  var myTasks = [
      'Recod a ReactJS video',
      'Go for a walk'
      ]

  return (
    <div>
      <ToDoList title='My stuff'  tasks={myTasks}/>
    </div>
  )
}

export default App;
