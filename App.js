import { Component } from 'react';
import './App.css'

class ToDoItem extends Component {
  //domyślny stan propsa dla done
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }
  //zmiana wartosci dla done w momecie wykonania
  toggleDone = () => {
    this.setState({done: !this.state.done})
  }

  render () {
    const { text } = this.props

    return (
      //Zmiana wrtosci css w odpowiedzi na zmiane wartosci done
      <div onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
        <p>{text}</p>
      </div>
    )
  }
}

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
        {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
        <input type='text' onChange={this.updateDraft} value={draft}/>
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}

function App() {
  var myTasks = [
      {done: true, text: 'Recod a ReactJS video'},
      {done: false, text: 'Go for a walk'}
      ]

  return (
    <div>
      <ToDoList title='My stuff'  tasks={myTasks}/>
    </div>
  )
}

export default App;
