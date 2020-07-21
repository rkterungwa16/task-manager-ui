import { LoginForm } from "../../Form/Login/LoginForm";
import { RedirectAuthenticatedUser } from "../../PrivateRoute/PrivateRoute";

const Login = () => <LoginForm />;

export default RedirectAuthenticatedUser(Login);
