import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return { ...d, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <div>
      <h1>Accedi</h1>
      <div className="forms">
        <label className="titles">Username</label>
        <input
          name="username"
          value={data.username}
          onChange={handleInputChange}
          placeholder="inserisci username"
        />
        <label className="titles">Password</label>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
          placeholder="inserisci la password"
        />

        <label>
          <input
            name="session"
            type="checkbox"
            checked={data.session}
            onChange={handleInputChange}
          />
          Ricordami
        </label>
      </div>
      <button disabled={!data.username || !data.password}>CONTINUA</button>
    </div>
  );
}
