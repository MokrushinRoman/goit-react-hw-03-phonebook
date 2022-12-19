import PropTypes from 'prop-types';

import { capitalLetter } from 'helpers';
import { SectionTitle } from './Title.styled';

export const Title = ({ text }) => {
  return <SectionTitle>{capitalLetter(text)}</SectionTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
