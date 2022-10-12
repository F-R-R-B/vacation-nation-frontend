import { Component } from "react";

class AboutMe extends Component {
  render () {
    return (
      <div className="h-16">
        <h3 className="text-2xl">{this.props.name}</h3>
      </div>
    );
  }
}

export default AboutMe;