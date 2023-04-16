import { styled, keyframes } from "@stitches/react";

const tile = keyframes({
  to: {
    backgroundPosition: "0 calc(-12288px / 2)",
  },
});

export const Video = styled("div", {
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
});

export const Preview = styled("div", {
    height: "calc(128px / 2)",
    width: "calc(320px / 2)",
    backgroundSize: "calc(320px / 2) calc(12288px / 2)",
    backgroundPosition: "0px 0px",
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    cursor: "pointer",
    "&:hover": {
      animation: `${tile} 7680ms steps(96, end) infinite`,
    },
    variants: {
      playing: {
        true: {
          animation: `${tile} 7680ms steps(96, end) infinite`,
        },
      },
    },
  });