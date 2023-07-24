import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';
import * as exampleAtcions from '../../store/modules/example/actions'

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleAtcions.clicaBotaoRequest());
  }
  
  return (
    <Container>
      <Title>
        jonas
        <small>foda né paizao</small>
      </Title>

      <Paragrafo>Lorem 5</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  )
}
