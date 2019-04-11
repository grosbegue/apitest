import React, { Component } from "react";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    fetch("http://randomuser.me/api/?results=500")
      .then(results => {
        return results.json;
      })
      .then(data => {
        let pictures = data.results.map(pic => {
          return (
            <div key={pic.results}>
              <img src={pic.picture.medium} />
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
  }

  render() {
    return (
      <div className={"container2"}>
        <div className={"container1"}>{this.state.pictures}</div>
      </div>
    );
  }
}

export default Background;
