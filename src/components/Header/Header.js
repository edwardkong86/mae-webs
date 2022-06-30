import React from "react";
import  {BackSvg}  from "../../assets/Icon/BackSvg";
import Icon from "@ant-design/icons";
import  {CloseSvg}  from "../../assets/Icon/CloseSvg";
import  {ChatSvg}  from "../../assets/Icon/ChatSvg";
import "./Header.css";

export const Header = () => {
  const BackIcon = (props) => <Icon component={BackSvg} {...props} />;
  const CloseIcon = (props) => <Icon component={CloseSvg} {...props} />;
  const ChatIcon = (props) => <Icon component={ChatSvg} {...props} />;
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BackIcon />
        <div
        className="headerTitle">
          Step 1 of 5
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "24px" }}>
            <ChatIcon />
          </div>
          <CloseIcon />
        </div>
      </div>
    </header>
  );
};

