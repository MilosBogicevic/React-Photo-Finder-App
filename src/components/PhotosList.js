import React from "react";

const PhotosList = (props) => {
  const photos = props.photos.map((image) => {
    return <img src={image.urls.regular} alt="" />;
  });
  return <div>{photos}</div>;
};

export default PhotosList;
