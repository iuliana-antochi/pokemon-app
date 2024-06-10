import "./Card.css";
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Pill from "../../../../Pill";

function Card({ name }) {
  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data && data.sprites ? (
        <Link to={`/${name}`} className="pokemon-link">
          <div className="card">
            <img src={data.sprites.front_default} alt={data.name} />
            <h2>{data.name}</h2>
            <Pill className="card-pill" key={name} name={name} />
          </div>
        </Link>
      ) : null}
    </>
  );
}

export default Card;
