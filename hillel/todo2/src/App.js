import React, {Component} from 'react';
import './App.css'
import Field from './Field'
import Text from './Text'

class App extends Component {

  state = {
    todos: [],
    edit: false
  }

  getTodos = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => response.json())
        .then((response) => {
          this.setState({todos: response})
        })
  }

  onAdd = () => {
    const txt = document.getElementById('entry').value
    if (txt.trim() == '') {
      alert('Please enter a text first')
    } else {
      let todos = this.state.todos.slice();
      todos[todos.length] =
          {
            'id': todos.length,
            'title': txt,
            'userId': 11,
            'completed': false
          }
      this.setState({todos})
      alert(`${txt} added to the bottom of the list`)
      document.getElementById('entry').value = ''
    }
  }

  onDelete = (i) => {
    const res = window.confirm(`Delete row ${i + 1}?`)
    if (res) {
      this.state.todos.splice(i, 1)
      this.setState({todos: this.state.todos})
    }
  }

  switchMode = () => {
    this.setState({edit: true})
  }

  onChange = (event, index) => {
    const todos = this.state.todos.slice()
    todos[index].title = event.target.value
    this.setState({todos : todos})
  }

  componentDidMount() {
    this.getTodos()
  }

  render() {
    return (
        <div className="App">
          To Do List:
          <input type="text" name="entry" id="entry"/>
          <button onClick={this.onAdd}>Add</button>
          <ol>
            {this.state.todos.map((todo, i) =>
                <>
                  <li>
                    {!this.state.edit ?
                        <Text
                            name={todo.title}
                            id={todo.id}
                            userId={todo.userId}
                            completed={todo.completed}
                            switchMode={this.switchMode}
                        />
                        :
                        <Field
                            key={todo.id}
                            name={todo.title}
                            onChange={i => this.onChange(window.event, i)}
                            nbr={i}
                            value={todo.title}
                            onDelete={this.onDelete}
                        />
                    }
                  </li>
                </>
            )
            }
          </ol>
        </div>
    )
  }
}

export default App;

