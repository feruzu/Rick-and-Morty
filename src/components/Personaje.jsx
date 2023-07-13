import '../App.css';

export default function Personaje({personaje}) {

  return (

    <div>
    <h2 className='nombre'>{personaje.name}</h2>
    <img src={personaje.image} alt={personaje.name}></img>
    </div>
   
  );
}
