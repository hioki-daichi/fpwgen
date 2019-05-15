import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import axios from "axios";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [useNumber, setUseNumber] = useState(false);
  const [useSign, setUseSign] = useState(false);

  useEffect(() => {
    refreshPassword(setPassword, useNumber, useSign);
  }, [useNumber, useSign]);

  return (
    <div>
      <h2>{password}</h2>
      <label>
        <input type="checkbox" onClick={() => setUseNumber(!useNumber)} />
        Use Number
      </label>
      <label>
        <input type="checkbox" onClick={() => setUseSign(!useSign)} />
        Use Sign
      </label>
      <div>
        <button
          onClick={() => refreshPassword(setPassword, useNumber, useSign)}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

const refreshPassword = async (
  setPassword: Dispatch<SetStateAction<string>>,
  useNumber: boolean,
  useSign: boolean
) => {
  const res = await axios.post(
    process.env.REACT_APP_URL!,
    `{ password(useNumber: ${useNumber}, useSign: ${useSign}) }`
  );

  setPassword(res.data.data.password);
};
