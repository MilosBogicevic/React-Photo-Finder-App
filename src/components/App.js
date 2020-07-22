import React from "react";
import axios from "axios";
import Search from "./Search";

class App extends React.Component {
  onSearchSubmit(term) {
    const response = axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID mLAYWnGqObxVSSx2xE_8noMZSKS1ZNcRxYfPg6kLJbE",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
