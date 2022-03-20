import { Component } from 'react'

class ListEntry extends Component {
  constructor(props) {
    super()
    this.state = { editMode: false, task: props.task }
    this.oldEntry = props.task.title
  }

  switchToEdit() {
    this.setState({ editMode: true })
  }
  switchToView() {
    let task = this.state.task
    task.title = this.oldEntry
    this.setState({ task: task, editMode: false })
  }

  changeTask(event) {
    let task = this.state.task
    task.title = event.target.value
    this.setState({ saveButton: task.title.length > 0, task: task })
  }
  deleteEntry() {
    this.props.handelDelete(this.props.task)
  }
  saveEntry(event) {
    event.preventDefault()
    if (this.state.task.title.length > 0) {
      this.props.handelEdit(this.state.task)
    }
    this.setState({ editMode: false })
  }
  renderViewMode() {
    return (
      <div className='listEntry-container'>
        <span> {this.state.task.title} </span>
        <div>
          <button type='button' onClick={() => this.switchToEdit()}>
            {' '}
            Edit
          </button>
          <button type='button' onClick={() => this.deleteEntry()}>
            {' '}
            Delete
          </button>
        </div>
      </div>
    )
  }

  renderEditMode() {
    return (
      <div className='listEntry-container'>
        <form onSubmit={event => this.saveEntry(event)}>
          <input
            type='text'
            value={this.state.task.title}
            onChange={event => this.changeTask(event)}
          />
          <div>
            <button type='submit' disabled={!this.state.saveButton}>
              {' '}
              save
            </button>
            <button type='button' onClick={() => this.switchToView()}>
              {' '}
              abort
            </button>
          </div>
        </form>
      </div>
    )
  }
  render() {
    return !this.state.editMode ? this.renderViewMode() : this.renderEditMode()
  }
}

export default ListEntry
