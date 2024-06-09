export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section>
      <h2 className="text-capitalize">#{id} - {name}</h2>
      <img src={ sprites } alt={name} />
    </section>
  );
}
