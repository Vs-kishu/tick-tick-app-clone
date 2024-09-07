import React from "react"; // Make sure this import is present
import "../styles/globals.css"; // Assuming you have global styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
