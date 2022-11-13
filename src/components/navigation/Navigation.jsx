
import {LinkStyle  } from './Navigation.styled';

export const Navigation = () => {
    return (
    <nav>
        <LinkStyle to="/">Home</LinkStyle>
        <LinkStyle to="/phonebook">Contacts</LinkStyle>
    </nav>
    );
};
