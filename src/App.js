import React, { Component } from 'react'
import './App.css'

import Toolbar from './components/Toolbar'
import Messages from './components/Messages'
import Compose from './components/Compose'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      messageToEdit: 0
    }
  }

  //// CREATE A MESSAGE \\\\
  postMessage = async (name, body) => {
    const postBody = {
      name: name,
      message: body
    }

    let response = await fetch(`https://storms-assessment.herokuapp.com/messages/`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    })
    if (response.status !== 200) {
      alert(`Edit Message: Invalid Post Submit`)
    }
    return this.getMessageState()
  }

  //// EDIT A MESSAGE \\\\
  editMessage = async (id, name, body) => {
    console.log("edit mess App.js:", id, name, body)
    const editBody = {
      name: name,
      message: body
    }
   
    let response = await fetch(`https://storms-assessment.herokuapp.com/messages/${id}`, {
      method: "PATCH",
      body: JSON.stringify(editBody),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    })
    if (response.status !== 200) {
      alert(`Edit Message: Invalid Edit Submit`)
    }
    return this.getMessageState()
  }

  //// DELETE A MESSAGE \\\\
  deleteMessage = async (id) => {
    let response = await fetch(`https://storms-assessment.herokuapp.com/messages/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    })
    return this.getMessageState()
   return false
  }

  //// GET MESSAGE STATE \\\\
  getMessageState = async () => {
    const response = await fetch(`https://storms-assessment.herokuapp.com/messages/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    if (response.status === 200) {
      let resJson = await response.json()
      console.log('resJson', resJson)
      this.setState({
        ...this.state,
        messages: resJson
      })
    } else {
      throw new Error('Broken GET')
    }
  }

  async componentDidMount() {
    this.getMessageState()
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <Compose postMessage={this.postMessage}/>
          <br />
        <Messages messages={this.state.messages} editMessage={this.editMessage} deleteMessage={this.deleteMessage} />
          <br />
      </div>
    )
  }
}

export default App