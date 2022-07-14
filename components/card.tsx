import { styled } from "@stitches/react";

export const Card = styled("div", {
  //border: '1px solid',
  cursor: "pointer",
  backgroundColor: "rgb(7, 25, 29)",
  color: "rgb(0, 194, 215)",
  borderColor: "rgb(4, 80, 99)",
  padding: "12px",
  borderRadius: "8px",
  minWidth: "150px",
  minHeight: "150px",
  variants: {
    variant: {
      on: {
        backgroundColor: "rgb(13, 25, 18)",
        color: "rgb(76, 195, 138)",
        borderColor: "rgb(27, 84, 58)",
      },
      off: {
        backgroundColor: "rgb(31, 18, 6)",
        color: "rgb(255, 139, 62)",
        borderColor: "rgb(118, 50, 5)",
      },
    },
  },
});

export const CardTitle = styled('div', {
  fontSize: "1.2rem",
  marginBottom: "8px",
  fontWeight: "bold",
  fontFamily: "lucida console,andale mono,courier new,monospace"
})
