import "./PokemonPage.css";
import { useParams, Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Pill from "./Pill";
import Header from "./components/Header/Header";
import NotFoundPage from "./NotFoundPage";
import Stats from "./Stats";

function PokemonPage() {
  const params = useParams();
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <NotFoundPage />;

  return (
    <>
      {data && (
        <>
          <Header />
          <div className="pokemon-wrapper">
            <div className="pokemon-images">
              <img src={data.sprites.front_default} alt={data.name} />
              <img src={data.sprites.back_default} alt={data.name} />
              <img src={data.sprites.front_shiny} alt={data.name} />
              <img src={data.sprites.back_shiny} alt={data.name} />
            </div>
            <div className="pokemon-info">
              <h2>{data.name}</h2>
              <Pill className="pokemon-pill" key={data.id} name={data.name} />
              <div>
                <h3>Abilities: </h3>
                {data.abilities.map((item, index) => (
                  <span key={item.ability.name}>
                    {item.ability.name}
                    {index < data.abilities.length - 1 ? ", " : null}
                  </span>
                ))}
              </div>
              <div>
                <h3>Stats: </h3>
                <Stats key={data.id} name={data.name} />
              </div>
            </div>
          </div>
        </>
      )}
      <Link className="link" to="/">
        Go back home
      </Link>
    </>
  );
}

export default PokemonPage;
