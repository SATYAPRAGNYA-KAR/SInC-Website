//Dashboard can't be accessed unless Logged in

import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
