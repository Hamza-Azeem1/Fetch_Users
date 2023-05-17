import { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="section">
      <h1>GitHub Users</h1>
      <ul className="users">
        {data.map((item) => {
          const { id, login, avatar_url } = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt="login" />
              <h3>{login}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
