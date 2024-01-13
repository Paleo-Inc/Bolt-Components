import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//TODO remove this when published
const theme = "dark";

function MyApp({ Component, pageProps }) {
  return (
    <div data-bs-theme={theme}>
      <Component {...pageProps} />
    </div>
  );
}
   
export default MyApp;
 