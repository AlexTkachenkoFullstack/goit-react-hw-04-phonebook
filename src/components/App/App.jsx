
import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid'
import { AppContainer, ApiTitleH1, ApiTitleH2 } from './App.styled';
const KEY='contacts'
class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
  }
  
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(KEY));
    if (contacts) {
     this.setState({contacts})
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts))
    }
}

  handleCnangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

 deleteContact = (idContact) => {
    this.setState((prevState)=>({ contacts: prevState.contacts.filter(({id})=>id!==idContact)}))
  }

  findContacts = () => {
     const  сontactMatches= this.state.contacts.filter(({name})=>(name.toUpperCase().includes(this.state.filter.toUpperCase())))
   return сontactMatches
  }

  handleSubmit = (values, actions) =>
  {
        const contactId = nanoid()
          if (this.state.contacts.some(item => item.name === values.name))
            {
            alert(`${values.name} is already in contacts`)
            return
            }  
      this.setState((prevState) =>
      (
        {
          contacts: [...prevState.contacts,
          { name: values.name, number: values.number.toString(), id: contactId }]
        }
      )
                  )
        actions.resetForm()
  }

  render() {
    return (
      <AppContainer>
         <ApiTitleH1>Phonebook</ApiTitleH1>
        <ContactForm onSubmit={this.handleSubmit} contacts={ this.state.contacts} />
         <ApiTitleH2>Contacts</ApiTitleH2>
         <Filter  onChangeFilter={this.handleCnangeFilter}  />
        <ContactList contacts={this.state.contacts} filter={this.findContacts} onDeleteContact={this.deleteContact} />
      </AppContainer>
    )
  }
}

export default App
