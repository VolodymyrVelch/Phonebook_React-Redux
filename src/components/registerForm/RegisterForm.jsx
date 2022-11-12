import { Formik } from "formik"
import { MainForm, Lable,InputField, ErrorMess, Button  } from "./RegisterForm.styled";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

const initialValues = { name: '', email: '', password: '' }
const massageName = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const EmailAlert = "Please enter valid email";
const PasswordAlert = "Password should be at least 6 characters"
const patternName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

let schema = yup.object().shape({
    name: yup.string().matches(patternName, massageName).required('Name is required'),
    email: yup.string().email(EmailAlert).required('Email is required'),
    password: yup.string().min(6, PasswordAlert).required('Password is requaired'),
});

export const RegisterForm = () => {
        const dispatch = useDispatch();
        const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm()
    }
    return (
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>

        <MainForm  autoComplete="off">
            <Lable>
                Username
                <InputField type="text" name="name"  />
                </Lable>
                <ErrorMess name="name" component="p" />
            <Lable htmlFor="">
                Email
                <InputField type="email" name="email"  />
                </Lable>
                <ErrorMess name="email" component="p" />
            <Lable htmlFor="">
                Password
                <InputField type="password" name="password" />
                </Lable>
                <ErrorMess name="password" component="p" />
            <Button type='submit'>Register</Button>
        </MainForm>
        </Formik>
    )
}