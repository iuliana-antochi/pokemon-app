import "./PokemonPage.css";
import { useParams, Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Pill from "./components/Pill/Pill";
import Header from "./components/Header/Header";
import NotFoundPage from "./NotFoundPage";

function PokemonPage() {
  const params = useParams();
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );

  if (isLoading) return <p>Loading...</p>;

  if (error)
    return (
      <>
        {" "}
        <p>Error: {error.message}</p>
        <NotFoundPage />
      </>
    );

  return (
    <>
      <Header />
      {data && (
        <div className="pokemon-wrapper">
          <div className="pokemon-images">
            <img src={data.sprites.front_default} alt={data.name} />
            <img src={data.sprites.back_default} alt={data.name} />
            <img src={data.sprites.front_shiny} alt={data.name} />
            <img src={data.sprites.back_default} alt={data.name} />
          </div>
          <div className="pokemon-info">
            <h2>{params.pokemonName}</h2>
            <Pill
            className="pokemon-pill"
              key={params.pokemonName}
              name={params.pokemonName}
            />
            <div>
              <h3>Abilities:</h3>{" "}
              {data.abilities.map((item, index) => (
                <span key={item.id}>
                  {item.ability.name}
                  {index < data.abilities.length - 1 ? ", " : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <Link className="link" to="/">
        Go back home
      </Link>
    </>
  );
}

export default PokemonPage;
