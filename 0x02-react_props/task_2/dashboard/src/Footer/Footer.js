import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

export { Footer };
