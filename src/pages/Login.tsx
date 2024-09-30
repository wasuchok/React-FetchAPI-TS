import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/context";
import axios from "axios";
import { useState, useContext } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/api-react-context/api.php/verify",
        {
          name: username,
          pass: password,
        }
      );
      if (
        response.status == 200 &&
        response.data.message == "เข้าสู่ระบบสำเร็จ"
      ) {
        await localStorage.setItem(
          "user",
          JSON.stringify(response.data.resultData)
        );
        await alert(response.data.message);
        await navigate("/home");
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Login User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <Link to="/register">ยังไม่ได้มีบัญชี?</Link>
      </form>

      <br />
      <br />
    </>
  );
};

export default Login;
