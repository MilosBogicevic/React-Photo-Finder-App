import React from "react";

class PhotoCard extends React.Component {
  render() {
    const { description, urls } = this.props.photo;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard;
