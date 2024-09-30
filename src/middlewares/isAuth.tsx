import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isAuth: React.FC = ({ children }: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      alert("ยังไม่ได้เข้าสู่ระบบ");
      navigate("/logout");
    }
  }, []);
  return children;
};

export default isAuth;
