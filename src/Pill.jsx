import "./Pill.css";
import useFetch from "./hooks/useFetch";

function Pill({ name, className }) {
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className={className}>
      {data &&
        data.types ?
        data.types.map((item) => (
          <li key={item.slot} className={item.type.name}>
            {item.type.name}
          </li>
        )) : null}
    </ul>
  );
}

export default Pill;
