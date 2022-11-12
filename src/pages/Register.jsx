
import { RegisterForm } from 'components/registerForm/RegisterForm';
// import { useSelector } from 'react-redux';
// import { selectError } from 'redux/auth/selectors';

export default function Register() {
    //  const error = useSelector(selectError);
    return <div>
            <h2>Registration</h2>
        <RegisterForm />
    </div>;
}
/* {error && <b>{error}</b>} */