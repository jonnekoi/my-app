import { createContext, useContext, useState } from "react";
import { useAuthentication, useUser } from "../hooks/ApiHooks";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const { login } = useAuthentication();
  const navigate = useNavigate();
  const { getUserByToken } = useUser();

  const handleLogin = async (credentials) => {
    console.log("credentials", credentials);
    console.log({ credentials });
    try {
      const userData = await login(credentials);
      localStorage.setItem('token', userData.token);
      setUser(userData.user)
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(undefined)
    navigate("/")
  }

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user);
        const origin = location.state.from.pathname || '/';
        navigate(origin);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // TODO poista setUser ja refaktoroi Profile.jsx
  return (
      <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
        {children}
      </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
