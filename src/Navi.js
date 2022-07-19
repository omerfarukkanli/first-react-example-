import React, { Component } from "react";
import Navicss from "./css/main.css";

export default class extends Component {
  render() {
    return (
      <header>
        <div id="navbar">
          <h1>Ömer Faruk Kanlı</h1>
          <li>
            <ul>
              <a href="#" target="_blank">
                Works
              </a>
            </ul>
            <ul>
              <a href="#" target="_blank">
                Source
              </a>
            </ul>
          </li>
        </div>
        <div></div>
      </header>
    );
  }
}
