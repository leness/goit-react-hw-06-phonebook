import { Component } from "react";
import { connect } from "react-redux";
import shortid from 'shortid';
import styles from './ContactForm.module.css'
import contactsActions from '../../redux/contacts/contacts-actions'


class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

    // formSubmitHandler = ({ name, number }) => {
    // if (this.state.contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
    //   alert(`${name} is already in contacts.`);
    // } else {
    //   const newContact = { id: shortid.generate(), name, number };
    //   console.log(newContact);

  
    
    handleSubmit = e => {
    e.preventDefault();
        this.props.onSubmit(this.state)
        this.reset();
        }

    reset = () => {
        this.setState({name: '', number: ''})
    }
    
    render() {
        return (
            <>
            <form className={styles.form} onSubmit={this.handleSubmit}>
                    <label htmlFor={ this.nameInputId}>name
           <input
                            type='text'
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            id={this.nameInputId}
                            value={this.state.name}
                            onChange={this.handleChange} />
          </label>
          <label htmlFor={ this.numberInputId}>number
           <input
                            type='number'
                            name='number'
                            required
                            id={this.numberInputId}
                            value={this.state.number}
                            onChange={this.handleChange} />
          </label>
          <button type='submit'>Add contact</button>
        </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsActions.addContacts(name, number))
})

export default connect(null, mapDispatchToProps)(ContactForm)



