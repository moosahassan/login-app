import React, { Component } from "react";

let divStyle = {
  'float': 'none'
};

class Stuff extends Component {
  render() {
    return (
      <div>
        <h3>stuff</h3>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque
          ultricies nisl sit amet lectus faucibus sollicitudin. in hac habitasse
          platea dictumst. curabitur massa metus, sagittis eu tellus vitae,
          rutrum dictum eros. nam in placerat sem, quis dapibus sem. etiam
          luctus bibendum ante eu pellentesque:
        </p>
        <ol>
          <li style={divStyle}>nulla pulvinar diam</li>
          <li style={divStyle}>facilisis bibendum</li>
          <li style={divStyle}>vestibulum vulputate</li>
          <li style={divStyle}>eget erat</li>
          <li style={divStyle}>id porttitor</li>
        </ol>
      </div>
    );
  }
}

export default Stuff;
