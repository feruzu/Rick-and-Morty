import { Container } from 'react-bootstrap'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from './components/Personajes';

function App() {

  return (
    <Container>
      <h1>Rick y Morty</h1>
      <Personajes/>
    </Container>
  )
 
}

export default App
