import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const PhonebookForm = styled.form`
    width: 100%;
`;

export const Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: 700;

    & + & {
        margin-top: ${({ theme }) => theme.space[2]}px;
    }

    &:last-of-type {
        margin-bottom: ${({ theme }) => theme.space[1]}px;
    }
`;

export const Input = styled.input`
    display: block;
    padding: ${({ theme }) => theme.space[0]}px;
    padding-right: ${({ theme }) => theme.space[2]}px;
`;

export const AddContactButton = styled.button`
    border: ${({ theme }) => theme.borders.initial};
    border-radius: ${({ theme }) => theme.radii.initial};

    background: linear-gradient(#6494e6, #9198e5);
    box-shadow: ${({ theme }) => theme.shadows.buttons};

    font-size: ${({ theme }) => theme.fontSizes.s};

    transition: box-shadow ${({ theme }) => theme.transition};

    :hover,
    :focus {
        transform: scale(1.02);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 28px;
    left: 173px;

    padding: 0;
    height: 20px;
    width: 20px;

    border: none;
    background-color: transparent;
`;

// Formik

export const PhonebookFormikForm = styled(Form)`
    width: 100%;
`;

export const FormikInput = styled(Field)`
    display: block;
    padding: ${({ theme }) => theme.space[0]}px;
    padding-right: ${({ theme }) => theme.space[2]}px;
`;
