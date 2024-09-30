import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import { useContext, useEffect } from "react";
import { Context } from "./contexts/context";
import Logout from "./pages/Logout";
import isAuth from "./middlewares/isAuth";

const App = () => {
  const { setUser } = useContext(Context);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [localStorage.getItem("user")]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <>
              <ProductList />
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
