import React, { FunctionComponent } from "react";
import { styled } from "@stitches/react";

export const Card = styled("div", {
  backgroundColor: "lightblue",
  padding: "12px",
  borderRadius: "8px",
  minWidth: "150px",
  minHeight: "150px",
  variants: {
    variant: {
      on: {
        backgroundColor: "lightgreen",
      },
      off: {
        backgroundColor: "lightsalmon",
      },
    },
  },
});
