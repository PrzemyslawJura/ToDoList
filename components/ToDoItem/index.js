import { Component } from 'react';

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

  export default ToDoItem