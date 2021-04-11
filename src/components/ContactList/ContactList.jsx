import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './ContactList.module.css';
import contactsActions from '../../redux/contacts/contacts-actions'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
        {contacts.map(({id, name, number}) => (
            
                  <li key={id} className={style.list}>
            <p>{name}: {number}</p>
            <button className={style.button} onClick={()=>onDeleteContact(id)}>Delete</button>
           </li>  
        ) 
          )}
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};


const getVisibleContacs = (allContacts, filter) => {
    const normalizeSearch = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeSearch),
    );
  };


const mapStateToProps = ({contact: {contacts, filter}}) => ({
  contacts: getVisibleContacs(contacts, filter),
})
  

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
