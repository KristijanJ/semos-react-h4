import React from "react";
import Photo from "./Photo";
import styles from "../mystyle.module.css";

const Gallery = props => {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th className={styles.darkBG}>ID</th>
          <th className={styles.darkBG}>Title</th>
          <th className={styles.darkBG}>IMG</th>
        </tr>
      </thead>
      <tbody>
        {props.photoslist.map((photo, id) => <Photo key={id} photo={photo} />)}
      </tbody>
    </table>
  );
};

export default Gallery;
