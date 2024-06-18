import "./PokemonPage.css";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Pill from "../../Pill";
import Header from "../../Header";
import Stats from "./components/Stats/Stats";
import Images from "./components/Images/Images";

function PokemonPage() {
  const params = useParams();
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) throw new Error(error.message);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {data && (
        <>
          <Header />
          <div className="pokemon-wrapper">
            <Images data={data}/>
            <div className="pokemon-info">
              <h2 className="pokemon-title">{data.name}</h2>
              <Pill className="pokemon-pill" key={data.id} types={data.types} />
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
                <Stats key={data.id} stats={data.stats} />
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
