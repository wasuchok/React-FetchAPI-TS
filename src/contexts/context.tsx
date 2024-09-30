import { createContext, useState, useEffect } from "react";

const Context = createContext<any>(null);

const ContextProvider: React.FC<any> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [products, setProducts] = useState<any>([]);
  const [user, setUser] = useState<any>();

  return (
    <Context.Provider
      value={{
        count,
        setCount,
        products,
        setProducts,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
