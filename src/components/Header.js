import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../mystyle.module.css";

export default function Header() {
  return (
    <header className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/semos-react-h4/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/semos-react-h4/gallery">Gallery</NavLink>
        </li>
      </ul>
    </header>
  );
}
