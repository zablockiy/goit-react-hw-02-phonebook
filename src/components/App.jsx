import React, {Component} from "react";
import {nanoid} from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  formSubmitHadle =({name,number})=>{
    const newContact ={
      id: nanoid(),
      name,
      number,
    };

    const getAllNames = this.state.contacts.map(contact=>contact.name);

    if (getAllNames.includes(name)){
      return Notify.warning(`${name} is already in contacts`)
    }

    this.setState(({contacts})=>({
      contacts:[newContact,...contacts]
    }))
  }

  changeFilter = (e)=>{
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  getVisibleContacts =()=>{
    const {contacts, filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter (contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const {contacts, filter} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section title='Phonebook'>
        <Form
          onSubmitHandle={this.formSubmitHandle} />

        {contacts.length === 0 ? (
          <div className={style.contacts__emty}>
            <h2>Missing contacts</h2>
          </div>) : (
          <Contacts
            title='Contacts'

            contacts={visibleContacts}
            onDeliteContact={this.deliteContact}>

            <Filter value={filter} onChange={this.changeFilter} />


          </Contacts>
    )
  }
      </Section>)

}
