import React from 'react'
import {  Modal, Button } from 'react-materialize'

const Compose = ({postMessage}) => {
  const createMessage = (ev) => {
    ev.preventDefault()
    let name = ev.target[0].value
    let message = ev.target[1].value

    return postMessage(name, message)
  }
  return <div>
  <br />
    <Modal className="Modal"
      header='Add a Message!'
      trigger={<Button className="waves-effect waves-red">Add a Message</Button>}>
      <form onSubmit={createMessage}>
        <label>Name</label>
        <input type="text" name="Name" />
        <label>Message</label>
        <input type="text" name="Message" />
        <Button className="waves-effect waves-red btn modal-close" name="submit">Add Message</Button>
      </form>
    </Modal>
  </div>
}

export default Compose