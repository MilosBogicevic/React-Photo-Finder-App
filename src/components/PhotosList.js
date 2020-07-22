import React from "react";

const PhotosList = (props) => {
  const photos = props.photos.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{photos}</div>;
};

export default PhotosList;
