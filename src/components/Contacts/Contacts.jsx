import PropTypes from 'prop-types';
import { capitalLetter } from 'helpers';

import { Contact, ContactsList, DeleteButton } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Contact key={id}>
                        {name}: {number}
                        <DeleteButton
                            onClick={() => {
                                deleteContact(id);
                            }}
                        >
                            {capitalLetter('delete')}
                        </DeleteButton>
                    </Contact>
                );
            })}
        </ContactsList>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }).isRequired
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
