import Auth from "./auth";
import { useUserContext } from "../context/userContext";
import Dashboard from "./Dashboard";
import Home from "./Home";

function App1() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Esperando...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App1;