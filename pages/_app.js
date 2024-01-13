import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import React from "react";
//TODO remove this when published
const theme = "light";

function MyApp({ Component, pageProps }) {
  return (
    <div data-bs-theme={theme}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
