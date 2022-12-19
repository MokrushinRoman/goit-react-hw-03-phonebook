import { Component } from 'react';
import { BiXCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { errorNotification } from 'helpers';

import {
    PhonebookForm,
    Label,
    Input,
    AddContactButton,
    CloseButton,
} from './Phonebook.styled';
import { Box } from 'components/Box';

export class Phonebook extends Component {
    static propTypes = {
        existedContacts: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string,
                name: PropTypes.string,
                number: PropTypes.string,
            }).isRequired
        ).isRequired,
        addContact: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    onInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    onClearInput = e => {
        const { name } = e.currentTarget;
        this.setState({ [name]: '' });
    };

    onSubmit = e => {
        const { name: newName, number } = this.state;
        e.preventDefault();

        if (this.dublicateFinder(newName)) {
            errorNotification(newName);
        } else {
            this.props.addContact(newName, number);
            this.formReset();
        }
    };

    dublicateFinder = newName => {
        return this.props.existedContacts.some(
            ({ name }) => name.toLowerCase() === newName.toLowerCase()
        );
    };

    formReset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <PhonebookForm onSubmit={this.onSubmit}>
                <Box position="relative">
                    <Label>
                        Name
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            onChange={this.onInputChange}
                            required
                        />
                    </Label>

                    <CloseButton
                        type="button"
                        onClick={this.onClearInput}
                        name="name"
                    >
                        <BiXCircle />
                    </CloseButton>
                </Box>

                <Box position="relative">
                    <Label>
                        Number
                        <Input
                            type="tel"
                            value={this.state.number}
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            onChange={this.onInputChange}
                            required
                        />
                    </Label>

                    <CloseButton
                        type="button"
                        onClick={this.onClearInput}
                        name="number"
                    >
                        <BiXCircle />
                    </CloseButton>
                </Box>

                <AddContactButton type="submit">Add contacts</AddContactButton>
            </PhonebookForm>
        );
    }
}
