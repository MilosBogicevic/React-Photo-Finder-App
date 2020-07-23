import React from "react";

class PhotoCard extends React.Component {
  render() {
    return (
      <div>
        <img
          alt={this.props.photo.description}
          src={this.props.photo.urls.regular}
        />
      </div>
    );
  }
}

export default PhotoCard;
