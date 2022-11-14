import { useAuth } from "components/hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operation";
import { Button } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut())
    
    return <div>
        <p>Welcome, {user.name} </p>
        <Button type='button' onClick={handleLogOut}>Logout</Button>
    </div>;
}