import React from "react";
import { useLocation } from "react-router-dom";
import { type IFormInput } from "../Contact/Contact";

const Confirm = (): JSX.Element => {
  const location = useLocation();
  const data = location.state as IFormInput;
  return (
    <>
      <h1>確認画面</h1>
      <div>
        {data.firstName}
        {data.lastName}
        {data.email}
        {data.contact}
      </div>
    </>
  );
};

export default Confirm;
