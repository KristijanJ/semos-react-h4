import React from "react";
import Photo from "./Photo";
import styles from "../mystyle.module.css";

const Gallery = props => {
  return props.photoslist.length > 0 ? (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Title</th>
            <th className={styles.tableHeader}>IMG</th>
          </tr>
        </thead>
        <tbody>
          {props.photoslist.map((photo, id) => (
            <Photo key={id} photo={photo} />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className={styles.loading}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Gallery;
