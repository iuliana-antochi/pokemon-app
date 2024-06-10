import "./Stats.css";
import useFetch from "./hooks/useFetch";

function Stats({ name }) {
  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  const maxValues = {
    hp: 255,
    attack: 190,
    defense: 230,
    "special-attack": 194,
    "special-defense": 230,
    speed: 180,
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="stats-ul">
      {data && data.stats ? (
        data.stats.map((item) => (
          <li key={data.id} className="stats-li">
            <span>{item.stat.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${
                    (item.base_stat / maxValues[item.stat.name]) * 100
                  }%`,
                }}>
                <span>{item.base_stat}</span>
              </div>
            </div>
            <div className="max-value">{maxValues[item.stat.name]}</div>
          </li>
        ))
      ) : (
        <li>No stats available</li>
      )}
    </ul>
  );
}

export default Stats;
