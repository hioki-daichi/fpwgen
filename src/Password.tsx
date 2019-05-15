import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import axios from "axios";

export const Password = () => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    refreshPassword(setPassword);
  }, []);

  return (
    <div>
      <h2>{password}</h2>
      <button onClick={() => refreshPassword(setPassword)}>Refresh</button>
    </div>
  );
};

const refreshPassword = async (
  setPassword: Dispatch<SetStateAction<string>>
) => {
  const res = await axios.post("http://localhost:8080/graphql", "{ password }");

  setPassword(res.data.data.password);
};
