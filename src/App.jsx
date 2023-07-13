import { Container } from 'react-bootstrap'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from './components/Personajes';

function App() {

  return (
    <Container className='container'>
      <h1 className='titulo'>Rick and Morty</h1>
      <Personajes/>
    </Container>
  )
 
}

export default App
