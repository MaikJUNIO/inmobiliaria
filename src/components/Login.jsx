import { useState } from "react";
import {
  loginWithGoogle,
  loginWithFacebook,
  loginAsGuest,
  loginEmail,
  registerEmail,
} from "../services/firebase";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUser } from "react-icons/fa";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async () => {
    try {
      if (isRegister) {
        await registerEmail(email, password);
      } else {
        await loginEmail(email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isRegister ? "Crear cuenta" : "Iniciar sesión"}
        </h1>

        {/* Error */}
        {error && (
          <p className="bg-red-100 text-red-500 p-2 rounded-lg text-sm mb-3">
            {error}
          </p>
        )}

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login / Register */}
        <button
          onClick={handleEmailLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
        >
          {isRegister ? "Crear cuenta" : "Entrar"}
        </button>

        <p
          className="text-center text-sm mt-3 cursor-pointer text-blue-600"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </p>

        <div className="mt-6 border-t pt-4">
          <p className="text-center text-gray-600 mb-4">
            O continúa con
          </p>

          <div className="flex flex-col gap-3">

            {/* GOOGLE */}
            <button
              onClick={loginWithGoogle}
              className="flex items-center justify-center gap-3 w-full bg-white border rounded-xl py-3 hover:bg-gray-50 transition shadow"
            >
              <FcGoogle size={26} />
              <span className="font-medium">Google</span>
            </button>

            {/* FACEBOOK */}
            <button
              onClick={loginWithFacebook}
              className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700 transition shadow"
            >
              <FaFacebook size={26} />
              <span className="font-medium">Facebook</span>
            </button>

            {/* ANÓNIMO */}
            <button
              onClick={loginAsGuest}
              className="flex items-center justify-center gap-3 w-full bg-gray-200 rounded-xl py-3 hover:bg-gray-300 transition shadow"
            >
              <FaUser size={22} className="text-gray-600" />
              <span className="font-medium">Entrar como invitado</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
