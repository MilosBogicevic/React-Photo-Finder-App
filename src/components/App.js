import React from "react";
import axios from "axios";
import Search from "./Search";
import PhotosList from "./PhotosList";

class App extends React.Component {
  state = { photos: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID mLAYWnGqObxVSSx2xE_8noMZSKS1ZNcRxYfPg6kLJbE",
      },
    });
    this.setState({ photos: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onSearchSubmit} />
        <PhotosList photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
