import React, { useEffect, useState, SetStateAction, Dispatch } from "react";
import { PasswordGenerator } from "./PasswordGenerator";

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

const refreshPassword = (
  setPassword: Dispatch<SetStateAction<string>>,
  useNumber: boolean,
  useSign: boolean
) => {
  const g = new PasswordGenerator(useNumber, useSign);
  setPassword(g.generate());
};
