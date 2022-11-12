import { AuthNav } from 'components/authNav/AuthNav';
import { Nav,LinkStyle  } from './Navigation.styled';

export const Navigation = () => {
    return (
    <Nav>
        <LinkStyle to="/">Home</LinkStyle>
        <LinkStyle to="/phonebook">Contacts</LinkStyle>
        <AuthNav></AuthNav>
    </Nav>
    );
};
