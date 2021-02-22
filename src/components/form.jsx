import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  // handleUsernameChange = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handleCommentsChange = (event) => {
  //   this.setState({
  //     comments: event.target.value
  //   })
  // }

  // handleTopicChange = event => {
	// 	this.setState({
	// 		topic: event.target.value
	// 	})
	// }

  handleInputChange = (event) => {
    this.setState({
			[event.target.name]: event.target.value
		})
  }

  handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
		event.preventDefault()
	}

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea id="comments" name="comments" type="text" value={this.state.comments} onChange={this.handleInputChange}/>
        </div>
        <div>
					<label>Topic</label>
					<select name="topic" value={this.state.topic} onChange={this.handleInputChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
        <button type="submit">Submit</button>
      </form>
     );
  }
}
 
export default Form;