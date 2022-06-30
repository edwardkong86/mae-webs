import React from "react";
import "./Error.scss";

export const ErrorMessage = (props) => {
  const { error } = props;
  return (<div className="error">{error}</div>);
};
