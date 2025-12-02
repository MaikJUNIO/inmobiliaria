// src/App.jsx
import Login from "./components/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./services/firebase";
import { useEffect, useState } from "react";

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsub(); // limpiar listener
  }, []);

  return (
    <div>
      {!usuario ? (
        <Login />
      ) : (
        <div style={{ padding: 20 }}>
          <h2>Hola {usuario.email || "Invitado"} ❤️</h2>

          <button onClick={() => signOut(auth)}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
}

export default App;

