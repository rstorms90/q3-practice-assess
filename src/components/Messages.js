import React from 'react'
import { Modal, Button } from 'react-materialize'

export default class Messages extends React.Component {

  editSubmit = (ev) => {
    ev.preventDefault()
    let editMessageId = ev.target.id
    let editMessageName = ev.target[0].value
    let editMessageBody = ev.target[1].value
    if (editMessageBody.length === 0) {
      editMessageBody = ev.target[1].placeholder
    }
    if (editMessageName.length === 0) {
      editMessageName = ev.target[0].placeholder
    }
    this.props.editMessage(editMessageId, editMessageName, editMessageBody)
  }

  deleteMessage = (ev) => {
    ev.preventDefault()
    console.log(ev.target.id)
    return this.props.deleteMessage(ev.target.id)
  }

  render () {
    let messagesArr = this.props.messages
    if (messagesArr === undefined || messagesArr.length === 0) {
    return <div>Loading...</div>
  }
    return messagesArr.map((message) => {
       return <div className="messageList">
       <hr/>
         <ul>
          <span className="messageName">Name: {message.name}</span>
          <br />
          <span className="messageMessage">"{message.message}"</span>
         
        </ul>
        
         <Modal className="Modal"
           header={`Edit Message ${message.id}`}
           trigger={<Button className="waves-effect waves-red"><i className="material-icons icon">edit</i>EDIT</Button>}>
           <form id={message.id} onSubmit={this.editSubmit}>
             <label>Name</label>
             <input type="text" placeholder={message.name} name="Name" />
             <label>Message</label>
             <input type="text" placeholder={message.message} name="Message" />
             <Button className="waves-effect waves-red btn modal-close" name="submit">Edit</Button>
             <br />
           </form>
         </Modal>
         <span><Button id={message.id} onClick={this.deleteMessage} className="waves-effect waves-teal btn-small delButton"><i id={message.id} className="material-icons icon">delete</i>DELETE</Button></span>
         </div>
    })
   
    }
  }