import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Personaje from "./Personaje";
import SiguientePag from "./Botones";
import Buscador from "./Buscador";


export default function Personajes() {

  const [personaje, setPersonaje] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState("");


  useEffect(() => {
    async function datosFetch() {
      const respuesta = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pagina}`
      );
      const data = await respuesta.json();
      setPersonaje(data.results);
    }

    datosFetch();
    
  }, [pagina]);

  const filtrarPersonajes = (personajes) => {
    return personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  return (
    <Container>

      <Buscador filtro={filtro} setFiltro={setFiltro} />
      <div className="row">
        {filtrarPersonajes(personaje).map((personaje) => (
          <div className="col-md-4" key={personaje.id}>
            <Personaje personaje={personaje} />
          </div>
        ))}
      </div>

      <SiguientePag pagina={pagina} setPagina={setPagina} />
    </Container>
  );
}
