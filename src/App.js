import axios from "axios";
import "./App.css";

const { useState } = require("react");

function App() {
  const [users, setUsers] = useState([]);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addRecord = () => {
    const randomId = getRandomInt(1, 10);
    console.log("Fetching....", randomId);
    axios
      .get(`https://swapi.dev/api/people/${randomId}/`)
      .then((response) => {
        console.log("response", response.data);
        const user = response.data;

        setUsers((prevUsers) => [
          ...prevUsers,
          {
            id: randomId,
            name: user.name,
          },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  };

  const deleteRecord = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <button onClick={addRecord}>Add Record</button>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => deleteRecord(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
