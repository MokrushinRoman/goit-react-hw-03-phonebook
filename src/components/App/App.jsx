import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Box } from '../Box';
import { Title, Contacts, Phonebook, Filter } from 'components';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        if (contacts !== null) {
            const parsedContacts = JSON.parse(contacts);

            this.setState({
                contacts: parsedContacts,
            });
        } else {
            this.setState({ contacts: initialContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts)
            );
        }
    }

    addContact = (name, number) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
        }));
    };

    dublicateFinder = newName => {
        const { contacts } = this.state;
        contacts.some(({ name }) => name === newName);
    };

    onFilterChange = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    handleFilterContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    };

    onDeleteContact = contactId => {
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(({ id }) => id !== contactId),
        }));
    };

    render() {
        const { filter, contacts } = this.state;
        const filteredContacts = this.handleFilterContacts();

        return (
            <Box
                mx="auto"
                my="100px"
                p={3}
                width="500px"
                border="1px solid rgba(0, 0, 0, 0.2)"
                borderRadius="5px"
                boxShadow="0 3px 7px rgba(0, 0, 0, 0.3)"
            >
                <h1 className="visually-hidden">Phonebook</h1>

                <Box>
                    <Title text="phonebook" />

                    <Phonebook
                        existedContacts={contacts}
                        addContact={this.addContact}
                    />
                </Box>

                <Box mt={3}>
                    <Title text="contacts" />

                    <Filter onChange={this.onFilterChange} value={filter} />

                    <Contacts
                        contacts={filteredContacts}
                        deleteContact={this.onDeleteContact}
                    />
                </Box>
            </Box>
        );
    }
}
