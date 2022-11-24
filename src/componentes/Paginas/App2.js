import Auth_admin from "./auth_admin";
import { useUserContext } from "../context/userContext";
import Dashboard_admin from "./Dashboard_admin";
import Crud_admin from "./Crud_admin";

function App2() {
  const { user, loading, error } = useUserContext();

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Esperando...</h2> : <> {user ? <Crud_admin /> : <Auth_admin />} </>}
    </div>
  );
}

export default App2;