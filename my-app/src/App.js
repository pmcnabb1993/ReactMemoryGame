import React, { Component, Fragment } from "react";
import { sample } from "lodash";

import Header from "./components/Header";
import Instructions from "./components/Instructions";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="game">
          <Instructions />
          <GameBoard />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

