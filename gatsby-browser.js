import React from "react";
import getTokens from "@kiwicom/orbit-components/lib/getTokens";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";

const customTokens = getTokens({
  base: {
    fontSizeSm: "14px",
    fontSizeMd: "16px",
    fontSizeLg: "18px",
  },
});

customTokens.lineHeightTextSmall = "18px";
customTokens.lineHeightTextNormal = "22px";
customTokens.lineHeightTextLarge = "24px";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={{ orbit: customTokens }}>{element}</ThemeProvider>
  );
};
