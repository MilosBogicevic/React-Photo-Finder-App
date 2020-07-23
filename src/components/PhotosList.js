import React from "react";
import "./PhotosList.css";
import PhotoCard from "./PhotoCard";

const PhotosList = (props) => {
  const photos = props.photos.map((photo) => {
    return <PhotoCard key={photo.id} photo={photo} />;
  });
  return <div className="photos-list">{photos}</div>;
};

export default PhotosList;
