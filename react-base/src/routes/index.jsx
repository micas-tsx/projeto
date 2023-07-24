import { Switch } from 'react-router-dom/cjs/react-router-dom'

import MyRoute from './myRoute'
import Login from '../pages/login'
import Page404 from '../pages/Page404'

export default function Routes() {
    return (
        <Switch>
            <MyRoute path='/' component={Login} />
            <MyRoute path='*' component={Page404} />
        </Switch>
    )
}