import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
    isAuthenticated: boolean;
    redirectTo: string;
}

class AuthenticatedRoute extends React.Component<Props> {
    render() {
        return this.props.isAuthenticated ? <Route {...this.props}></Route> : <Redirect to={this.props.redirectTo}></Redirect>
    }
}

export default AuthenticatedRoute;


/* 
import React from "react";

interface Props {
    isAuthenticated: boolean;
    redirectTo: string;
}

const AuthenticatedRoute: React.FC<Props> = (props) => {
    return props.isAuthenticated ? <Route {...props}></Route> : <Redirect to={props.redirectTo}></Redirect>
}

export default AuthenticatedRoute; */

