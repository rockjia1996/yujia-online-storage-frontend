import React from "react";
import { useNavigate } from "react-router-dom";
import Account from "./account";

const AccountWrapper = (props) => {
  return <Account user={props.user} navigate={useNavigate()} />;
};

export default AccountWrapper;
