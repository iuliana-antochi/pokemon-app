import "./Card.css";
import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Pill from "../../../../Pill";
import placeholderImage from "../../../../assets/Pokemon.svg";

function Card({ name }) {
  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const imageSrc =
    data && data.sprites && data.sprites.front_default
      ? data.sprites.front_default
      : placeholderImage;
  const isPlaceholder = imageSrc === placeholderImage;

  return (
    <>
      {data && data.sprites ? (
        <Link to={`/pokemon/${name}`} className="pokemon-link">
          <div className="card">
            <img
              src={imageSrc}
              alt={data.name}
              className={isPlaceholder ? "placeholder-image" : null}
              width="96px"
              height="96px"
            />
            <h2>{data.name}</h2>
            <Pill className="card-pill" key={name} types={data.types} />
          </div>
        </Link>
      ) : null}
    </>
  );
}

export default Card;
