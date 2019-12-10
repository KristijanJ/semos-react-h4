import React from "react";
import styles from '../mystyle.module.css';

const Users = props => {
  return (
    props.postslist.length > 0 ?
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th className={styles.darkBG}>ID</th>
          <th className={styles.darkBG}>Title</th>
          <th className={styles.darkBG}>Post</th>
        </tr>
      </thead>
      <tbody>
        {props.postslist.map((post, id) => {
          return (
            <tr key={id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    : <h2>Loading...</h2>
  );
};

export default Users;
