import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import axios from "axios";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [useNumber, setUseNumber] = useState(false);

  useEffect(() => {
    refreshPassword(setPassword, useNumber);
  }, [useNumber]);

  return (
    <div>
      <h2>{password}</h2>
      <label>
        <input type="checkbox" onClick={() => setUseNumber(!useNumber)} />
        Use Number
      </label>
      <div>
        <button onClick={() => refreshPassword(setPassword, useNumber)}>
          Refresh
        </button>
      </div>
    </div>
  );
};

const refreshPassword = async (
  setPassword: Dispatch<SetStateAction<string>>,
  useNumber: boolean
) => {
  const res = await axios.post(process.env.REACT_APP_URL!, `{ password(useNumber: ${useNumber}) }`);

  setPassword(res.data.data.password);
};
