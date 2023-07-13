import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function Buscador({ filtro, setFiltro }) {

  return (
    <div className='buscador'>
      <h1>Buscar</h1>

      <Form>
        <Form.Group className="mb-3">
          <FloatingLabel label="Personaje">
            <Form.Control
              id="personaje"
              type="text"
              placeholder="Personaje"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              required
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
    </div>
  );
}


