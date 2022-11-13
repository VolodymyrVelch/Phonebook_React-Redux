import { Navigation } from "components/navigation/Navigation"
import { UserMenu } from "components/userMenu/UserMenu"
import { AuthNav } from "components/authNav/AuthNav"
import { useAuth } from "components/hooks"
import { Header } from "./AppBar.styled"

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return <Header>
        <Navigation />
         {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
}