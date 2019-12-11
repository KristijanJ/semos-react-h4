import React from "react";

const Post = (props) => {
  return (
    <tr>
      <td>{props.post.id}</td>
      <td>{props.post.title}</td>
      <td>{props.post.body}</td>
    </tr>
  );
};

export default Post;
