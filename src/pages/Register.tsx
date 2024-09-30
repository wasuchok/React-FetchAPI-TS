import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/api-react-context/api.php/register",
        {
          name: username,
          pass: password,
        }
      );
      if (response.status == 200) {
        await alert(response.data);
        await navigate("/");
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Register User</h1>
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
        <Link to="/">มีบัญชีแล้วใช่ไหม?</Link>
      </form>
    </>
  );
};

export default Register;
