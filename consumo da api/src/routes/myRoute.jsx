import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// eslint-disable-next-line 
export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn =  false;

    if (isClosed && !isLoggedIn) {
        return (
            <Redirect 
                to={{ pathname: '/login', state: {prevPath: rest.location.pathname }}}
            />
        );
    }

    return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
    isClosed: false
}

MyRoute.proptypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isClosed: PropTypes.bool,
}