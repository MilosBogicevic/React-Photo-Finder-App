import React from "react";
import "./PhotosList.css";

const PhotosList = (props) => {
  const photos = props.photos.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div className="photos-list">{photos}</div>;
};

export default PhotosList;
