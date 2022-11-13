import { useAuth } from "components/hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operation";

export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut())
    
    return <div>
        <p>Welcome, {user.name} </p>
        <button type='button' onClick={handleLogOut}>Logout</button>
    </div>;
}