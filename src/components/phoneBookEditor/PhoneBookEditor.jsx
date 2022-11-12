// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operation";
// import { selectError, selectIsLoading } from "redux/selectors";
// import { Main, Contact } from "../App.styled";
// import { ContactForm } from "../contactForm/ContactForm";
// import { Filter } from "../filter/Filter";
// import { ContactList } from "../contactList/ContactList";
// import { useEffect } from "react";

// export const PhoneBookEditor = () => {
//     const dispatch = useDispatch();
//     const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError)
  
//     useEffect(() => {
//     dispatch(fetchContacts())
//     }, [dispatch]);
//     return <Main>
//         <h1>Phonebook</h1>
//         <ContactForm/>
//         <h2>Contacts</h2>
//         <Contact>
//             <Filter />
//             {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList /> 
//         </Contact>
//         </Main>
// }