import * as React from "react";
import { LoginForm } from "../../components/Form/Login/LoginForm";
import { RedirectAuthenticatedUser } from "../../util-components/PrivateRoute/PrivateRoute";

const Login = () => <LoginForm />;

export default RedirectAuthenticatedUser(Login);
