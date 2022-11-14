import { MainContent, ContactsBookLine, Phonebook, UseInfo } from "./Home.styled";
import { useState } from 'react';

export default function Home() {
    const [state, setState] = useState("");
    
    const handleClick = () => {
        return setState(true)
    }
    return <MainContent>
        <h2>Home Page</h2>
        <ContactsBookLine size="50"  onClick={handleClick}/>
        {state? (<UseInfo>To continue you should register  or log in</UseInfo>):''}
        <Phonebook> Phonebook</Phonebook>
    </MainContent>
}