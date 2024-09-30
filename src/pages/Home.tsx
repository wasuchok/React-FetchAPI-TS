import { Context } from "../contexts/context";
import { useContext } from "react";
const Home = () => {
  const { count, setCount } = useContext(Context);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>Text Context</h1>
      <h1>{count}</h1>
      <br />

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Home;
