
import React from 'react';
import { useState,useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid'
import { AppContainer, ApiTitleH1, ApiTitleH2 } from './App.styled';
const KEY = 'contacts'

function App() {
  // lazy state initialization (localStorage.getItem just for first render)
  const [contacts, setContacts] = useState(() => { return JSON.parse(window.localStorage.getItem(KEY)) ?? [] });
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
window.localStorage.setItem(KEY, JSON.stringify(contacts))
  }, [contacts])
  
 
  function handleCnangeFilter(event){
    setFilter(event.target.value)
}

  function deleteContact(idContact) {
    setContacts(prevState=>prevState.filter(({id})=>idContact!==id))
  }

  function findContacts() {
    return contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))
  }

  function handleSubmit(values, actions) {
    const contactId = nanoid()
    if(contacts.some(({name})=>name===values.name)){
            alert(`${values.name} is already in contacts`)
            return
    } 
    setContacts((prevState)=>[...prevState, { id: contactId, name: values.name, number: values.number.toString()}])
    actions.resetForm()
  }
  
  return (
      <AppContainer>
         <ApiTitleH1>Phonebook</ApiTitleH1>
        <ContactForm onSubmit={handleSubmit} />
         <ApiTitleH2>Contacts</ApiTitleH2>
         <Filter  onChangeFilter={handleCnangeFilter}  />
        <ContactList  filter={findContacts} onDeleteContact={deleteContact} />
      </AppContainer>
    )
}

// class App extends Component {
//  
  
// 

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem(KEY, JSON.stringify(this.state.contacts))
//     }
// }






export default App
