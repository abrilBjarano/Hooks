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

      <blockquote 
        className="blckquote"
        style={{ display: 'flex' }}
      >

        <p className="mb-1">{ abilities }</p>
        <footer className="blockquote-footer">{ name }</footer>

      </blockquote>

    </section>
  );
}
