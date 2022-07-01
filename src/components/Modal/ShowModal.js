import React from "react";
import { Button, Modal } from "antd-mobile";
import { Block } from "../Block";
import "../../styles.css";
import "./index.scss"
export const ShowModal = () => {
  return (
    <Block
      title="Modal"
      blockClassName="pickerBlock"
      titleClassName="pickerTitle"
    >
      <Button
        block
        className="fullButton"
        onClick={() => {
          Modal.alert({
            bodyClassName:"buttonModal",
            title: "Session Expired",
            content:
              "Looks like you've been inactive for 5 minutes. To continue, please login again.",
            showCloseButton: true,
            confirmText:"Okay"
          });
        }}
      >
        Show Modal
      </Button>
    </Block>
  );
};

