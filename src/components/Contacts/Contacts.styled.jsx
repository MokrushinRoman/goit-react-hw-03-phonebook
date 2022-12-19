import styled from '@emotion/styled';

export const ContactsList = styled.ul`
    margin-top: ${({ theme }) => theme.space[2]}px;
`;

export const Contact = styled.li`
    list-style: disc;

    margin-left: ${({ theme }) => theme.space[2]}px;

    font-size: ${({ theme }) => theme.fontSizes.m};

    & + & {
        margin-top: ${({ theme }) => theme.space[1]}px;
    }
`;

export const DeleteButton = styled.button`
    margin-left: 20px;

    border: ${({ theme }) => theme.borders.initial};
    border-radius: ${({ theme }) => theme.radii.initial};

    background: transparent;
    box-shadow: ${({ theme }) => theme.shadows.buttons};

    transition: box-shadow ${({ theme }) => theme.transition};

    :hover,
    :focus {
        transform: scale(1.02);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
`;
