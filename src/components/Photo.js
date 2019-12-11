import React from "react";

const Photo = (props) => {
  return (
      <tr>
        <td>{props.photo.id}</td>
        <td>{props.photo.title}</td>
        <td>
          <img src={props.photo.thumbnailUrl} alt={props.photo.title} />
        </td>
      </tr>
  );
};

export default Photo;
