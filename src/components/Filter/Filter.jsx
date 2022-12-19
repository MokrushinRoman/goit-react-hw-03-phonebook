import PropTypes from 'prop-types';

import { Label } from './Filter.styled';
import { capitalLetter } from 'helpers';

export const Filter = ({ value, onChange }) => {
    return (
        <Label>
            {capitalLetter('find contact by name')}
            <input type="text" value={value} onChange={onChange} />
        </Label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
