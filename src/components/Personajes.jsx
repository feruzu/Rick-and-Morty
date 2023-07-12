import { Container } from "react-bootstrap"
import { useEffect, useState } from "react";
import Personaje from "./Personaje";


export default function Personajes() {

    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
      async function datosFetch(){
      const respuesta = await fetch('https://rickandmortyapi.com/api/character');
      const data = await respuesta.json();
      setPersonaje(data.results);
      }
  
      datosFetch()
    }, []);



  return (
    
    <Container>
        {
        personaje.map((personaje) => {
          return(
            <Personaje personaje={personaje} key={personaje.id}/>
          )
        })
      }
    </Container>
    
  )
}
