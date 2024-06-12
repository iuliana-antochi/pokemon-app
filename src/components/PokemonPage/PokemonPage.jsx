import "./PokemonPage.css";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Pill from "../../Pill";
import Header from "../../Header";
import NotFoundPage from "../../NotFoundPage";
import Stats from "./components/Stats";
import placeholderImage from "../../assets/Pokemon.svg"

function PokemonPage() {
  const params = useParams();
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <NotFoundPage />;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {data && (
        <>
          <Header />
          <div className="pokemon-wrapper">
            <div className="pokemon-images">
              <img
                src={data.sprites.front_default || placeholderImage}
                alt={data.name}
                className={data.sprites.back_shiny ? null : "placeholder-image"}
                style={data.sprites.back_shiny ? {} : { width: "6.25rem" }}
              />

              <img
                src={data.sprites.back_default || placeholderImage}
                alt={data.name}
                className={data.sprites.back_shiny ? null : "placeholder-image"}
                style={data.sprites.back_shiny ? {} : { width: "6.25rem" }}
              />

              <img
                src={data.sprites.front_shiny || placeholderImage}
                alt={data.name}
                className={data.sprites.back_shiny ? null : "placeholder-image"}
                style={data.sprites.back_shiny ? {} : { width: "6.25rem" }}
              />

              <img
                src={data.sprites.back_shiny || placeholderImage}
                alt={data.name}
                className={data.sprites.back_shiny ? null : "placeholder-image"}
                style={data.sprites.back_shiny ? {} : { width: "6.25rem" }}
              />
            </div>
            <div className="pokemon-info">
              <h2 className="pokemon-title">{data.name}</h2>
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
      <button className="link" onClick={handleGoBack}>
        Go back
      </button>
    </>
  );
}

export default PokemonPage;
