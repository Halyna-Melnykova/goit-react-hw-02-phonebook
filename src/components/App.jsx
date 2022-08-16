import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHeandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      return { contacts: [newContact, ...contacts] };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHeandler} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
