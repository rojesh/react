import { useState } from 'react'
import './App.css'

function App() {
  const [ contact, setContact ] = useState({firstName: "", lastName: ""})
  const [ contactsData, setContactsData ] = useState([])

  function handleChange(e){
    const {name, value} = e.target
    setContact(prevContact => {
      return (
        {
          ...prevContact,
          [name]: value
        }
      )
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setContactsData(prevData => [...prevData, contact])
  }

  const contacts = contactsData.map(contact => <h2 key={contact.firstName}>{contact.firstName} {contact.lastName}</h2>)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
        <br/>
        <input
          placeholder="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
        <br/>
        <button>Add Contacts</button>
        <br/>
      </form>

      {contacts}
    </div>
  );
}

export default App;
