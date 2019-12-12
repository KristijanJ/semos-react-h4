import React from "react";
import Photo from "./Photo";
import Popup from "./Popup";
import styles from "../mystyle.module.css";

const Gallery = props => {
  return props.photoslist.length > 0 ? (
    <div className={styles.tableContainer} id="gallery">
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Title</th>
            <th className={styles.tableHeader}>IMG</th>
          </tr>
        </thead>
        <tbody>
          {props.photoslist.slice(0, 10).map((photo, id) => (
            <Photo openPhoto={props.openPhoto} key={id} photo={photo} />
          ))}
        </tbody>
      </table>

      {props.popupPhoto ? (
        <Popup closePhoto={props.closePhoto} photoUrl={props.popupPhoto} />
      ) : null}
    </div>
  ) : (
    <div className={styles.loading}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Gallery;
