export const PokemonCard = ({ id, name, sprites = [], abilities }) => {
  return (
    <section>
      <h1 className="text-capitalize">#{id} - {name}</h1>


      { 
        sprites.map( sprite => (
          <img key={ sprite } src={ sprite } alt={name} />
        ))
      }

      <h5>Abilities:</h5>
      <p>{ abilities }</p>

    </section>
  );
}
