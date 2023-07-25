import { Switch } from 'react-router-dom/cjs/react-router-dom'

import MyRoute from './myRoute'

import Aluno from '../pages/Aluno'
import Alunos from '../pages/Alunos'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Fotos from '../pages/Fotos'
import Page404 from '../pages/Page404'


export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path='/' component={Alunos} isClosed={false} />
            <MyRoute exact path='/aluno:id/edit' component={Aluno} isClosed />
            <MyRoute exact path='/aluno/' component={Aluno} isClosed />
            <MyRoute exact path='/fotos/:id' component={Fotos} isClosed />
            <MyRoute exact path='/login/' component={Login} isCLosed={false} />
            <MyRoute exact path='/register/' component={Register} isCLosed={false} />
            <MyRoute path='*' component={Page404} />
        </Switch>
    )
}