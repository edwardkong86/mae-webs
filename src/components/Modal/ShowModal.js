import React from "react";
import { Button, Modal } from "antd-mobile";
import { Block } from "../Block";
import "../../styles.css";

export const ShowModal = () => {
  return (
    <Block
      title="Modal"
      blockClassName="pickerBlock"
      titleClassName="pickerTitle"
    >
      <Button
        block
        onClick={() => {
          Modal.alert({
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

