import React from "react";
import { Link } from "react-router-dom";
import styles from "../mystyle.module.css";

export default function Header() {
  return (
    <header className={styles.nav}>
      <ul>
        <li>
          <Link to="/semos-react-h4/">Home</Link>
        </li>
        <li>
          <Link to="/semos-react-h4/gallery">Gallery</Link>
        </li>
      </ul>
    </header>
  );
}
