import { Button } from "react-bootstrap";


export default function SiguientePag(props) {

    window.scrollTo(0, 0);
  
    return (
      <div id="pag" className="d-flex justify-content-between aling-items-center">
        <Button
          className="primary"
          onClick={anterior}
        >
          Anterior
        </Button>
        <Button variant="primary" onClick={siguiente}>
          Siguiente
        </Button>
      </div>
    );
  
  
    // Botón anterior
    function anterior() {
      if (props.pagina > 1) {
        props.setPagina(props.pagina - 1);
      }
    }
  
    // Botón siguiente
  
    function siguiente() {
      props.setPagina(props.pagina + 1);
    }
  }