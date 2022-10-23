import { Component } from "react";

class NewEntery extends Component {
    constructor(){
        super()
        this.state = { canBeSaved: false, newEntry: ''}
    }
    setNewEntry(event){
        this.setState({newEntry: event.target.value, 
                        canBeSaved: event.target.value !== ''})
    }
    saveEntry(event) {
        event.preventDefault()
        if(this.state.newEntry.length > 0){
            this.props.handelSave(this.state.newEntry)
        }
        this.setState({newEntry: '', canBeSaved: false})
    }
    render() { 
        return (
            <div className="newEntry-container">
                <form onSubmit={ event => this.saveEntry(event) }>
                    <input onChange={event => this.setNewEntry(event)} type="text" value={this.state.newEntry} />
                    <button type="submit" disabled= {!this.state.canBeSaved}>save</button>
                </form>
            </div>
        )
    }
}
 
export default NewEntery;