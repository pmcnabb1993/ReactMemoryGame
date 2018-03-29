import React, { Component, Fragment } from "react";
import { sample } from "lodash";
import Scores from "./Scores";
import CardGrid from "./Grid";


class GameBoard extends Component {
    constructor(props) {
      super(props);
      this.increaseScore = this.increaseScore.bind(this);
      this.resetGame = this.resetGame.bind(this);
      this.state = {
        score: 0,
        topscore: 0,
      };
    }
    increaseScore = () => {
        this.setState((prevState, props) => {
          return {
            score: prevState.score + 1,
          };
        });
      };
      resetGame = () => {
        const currentScore = this.state.score;
        if (this.state.score > this.state.topscore) {
          this.setState({
            topscore: currentScore,
            score: 0,
          });
        } else {
          this.setState({
            score: 0,
          });
        }
      };
      render() {
        return (
          <Fragment>
            <div className="scoresMessages">
              <Scores score={this.state.score} topscore={this.state.topscore} />
            </div>
            <div className="gameBoard">
              <CardGrid
                increaseScore={this.increaseScore}
                resetGame={this.resetGame}
              />
            </div>
          </Fragment>
        );
      }
    }
    
    export default GameBoard;