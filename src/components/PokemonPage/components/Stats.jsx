import "./Stats.css";

function Stats({ stats }) {

  const maxValues = {
    hp: 255,
    attack: 190,
    defense: 230,
    "special-attack": 194,
    "special-defense": 230,
    speed: 180,
  };


  return (
    <ul className="stats-ul">
      {stats && stats.length > 0 ? (
        stats.map((item) => (
          <li key={item.stat.name} className="stats-li">
            <span>{item.stat.name}</span>
            <div className="progress-bar">
              <div
                key={`${item.stat.name}-progress`}
                className="progress"
                style={{
                  width: `${
                    (item.base_stat / maxValues[item.stat.name]) * 100
                  }%`,
                }}>
                <span>{item.base_stat}</span>
              </div>
            </div>
            <div className="max-value">max = {maxValues[item.stat.name]}</div>
          </li>
        ))
      ) : (
        <li>No stats available</li>
      )}
    </ul>
  );
}

export default Stats;
