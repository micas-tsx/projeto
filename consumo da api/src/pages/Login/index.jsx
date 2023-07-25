import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import * as actions from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'
import { get } from 'lodash'

import React from "react";

export default function Login() {
  const dispatch = useDispatch()

  const prevPath = get ( 'location.state.prevPath', '/');

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
 
  const handleSubmit = e => {
    e.preventDefault()
    let formErrors = false

    if(!isEmail(email)) {
      formErrors = true
      toast.error('email inválido')
    }

    if(password.length < 6 || password.length > 50) {
      formErrors = true
      toast.error('senha inválida') 
    }

    if (formErrors) return

    dispatch(actions.loginRequest({ email, password, prevPath }))
  }

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu Email"
        />

        <input
          type="tpassword" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
      </Form>
    </Container>
  )
}