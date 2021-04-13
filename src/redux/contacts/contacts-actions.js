import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit'

const addContacts = createAction('contacts/add', ( name, number ) => ({
    payload: {
        name,
        number,
        id: shortid.generate()
    }
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/change-filter');

export default { addContacts, deleteContact, changeFilter };