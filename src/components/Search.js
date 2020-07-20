import React from "react";

class Search extends React.Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label style={{ fontSize: "1.5rem" }}>Photo Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
