import { useState } from "react";
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { get } from 'lodash'

import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled'
import axios from '../../services/axios'
import history from '../../services/history'

export default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    let formErrors = false
    
    if(nome.length < 3 || nome.length > 255) {
      formErrors = true
      toast.error('Nome deve ter entre 3 e 255 caracteres')
    }

    if(!isEmail(email)) {
      formErrors = true
      toast.error('email inválido')
    }

    if(password.length < 6 || password.length > 50) {
      formErrors = true
      toast.error('senha deve ter entre 6 e 50 caracteres') 
    }

    if (formErrors) return

    try {
      await axios.post('/users/', {
        nome,
        password,
        email,
      })
      toast.success('Você fez seu cadastro')
      history.push('/login')
    } catch(e) {
      const errors = get(e, 'response.data.errors', [])
    
      errors.map(error => toast.error(error))
    }

  }

  return (
    <Container>
      <h1>Crie Sua Conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input 
            type="text" 
            value={nome} 
            onChange={e => setNome(e.target.value)}
            placeholder="Seu nome" 
          />
        </label>

        <label htmlFor="nome">
          email:
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu Email" 
          />
        </label>

        <label htmlFor="nome">
          Senha:
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder="Seu senha" 
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  )
}
