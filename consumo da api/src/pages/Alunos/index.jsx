import { useEffect, useState } from 'react'
import { Container } from "../../styles/GlobalStyles";
import axios from '../../services/axios'
import { AlunoContainer, ProfilePicture } from '../Aluno/stylesd';
import { get } from 'lodash'
import { FaUserCircle } from 'react-icons/fa'

export default function Alunos() {
  const [alunos, setAlunos] = useState([])
  
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos')
      setAlunos(response.data)
    }

    getData
  }, [])
  
  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map(aluno => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="foto do aluno" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>  

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}
