import { Component } from 'react'
import NewEntery from './newEntry'
import ListEntry from './list-entry'

class List extends Component {
  constructor(props) {
    super()
    this.state = { tasks: props.tasks }
    let currentID = 3
    this.nextID = function () {
      currentID++
      return currentID
    }
  }

  handelSave(task) {
    let newTask = {
      title: task,
      done: false,
      id: this.nextID(),
    }
    let tasks = this.state.tasks
    tasks.push(newTask)
    this.setState({ tasks: tasks })
  }
  handelDelete(task) {
    let tasks = this.state.tasks
    let index = tasks.findIndex(x => x.id === task.id)
    if (index >= 0) {
      tasks.splice(index, 1)
      this.setState({ tasks: tasks })
    }
  }
  handelEdit(editedTask) {
    let tasks = this.state.tasks
    let index = tasks.findIndex(x => x.id === editedTask.id)
    if (index >= 0) {
      tasks[index] = editedTask
      this.setState({ tasks: tasks })
    }
  }
  render() {
    return (
      <div className='list-container'>
        <h2>ToDo App</h2>
        <NewEntery handelSave={this.handelSave.bind(this)} />
        <ul className='lists-entry'>
          {this.state.tasks.map(task => (
            <ListEntry
              key={task.id}
              task={task}
              handelDelete={this.handelDelete.bind(this)}
              handelEdit={this.handelEdit.bind(this)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default List
