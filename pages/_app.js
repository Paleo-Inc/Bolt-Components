import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return <Component data-bs-theme="dark" {...pageProps} />;
}

export default MyApp;
