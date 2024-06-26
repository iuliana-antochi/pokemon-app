import "./Stats.css";

function Stats({ stats }) {
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
                  width: `${Math.min(item.base_stat, 100)}%`,
                }}
              >
                {item.base_stat > 100 ? <span>{item.base_stat}%</span> : null}
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>No stats available</li>
      )}
    </ul>
  );
}

export default Stats;
