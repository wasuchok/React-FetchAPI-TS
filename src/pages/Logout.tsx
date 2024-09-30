import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  setTimeout(() => {
    setCount(count - 1);
    if (count == 0) {
      navigate("/");
    }
  }, 1000);
  return <div>กำลังจะพาไปหน้าเข้าสู่ระบบ {count}</div>;
};

export default Logout;
