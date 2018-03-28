import React, { Component } from "react";
import { cloneDeep } from "lodash";
import MarioCard from "./MarioCard.js";

//json array for the mario cards and images 
import marioItem from "../../mario.json";

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedCards: [],
            picked: []
        };
        this.shuffle = this.shuffle.bind(this);
        this.validatePick = this.validatePick.bind(this);
    }
    componentWillMount() {
        this.shuffle();
    }

    validatePick = id => {
        const alreadyPicked = this.state.picked;
        if (!alreadyPicked.includes(id)) {
            alreadyPicked.push(id);
            this.props.increaseScore();
            this.shuffle();
        } else {
            this.props.resetGame();
            this.setState ({
                picked: []
            });
            this.shuffle();
        }
    };

    shuffle =() => {
        const marioClone = cloneDeep(marioItem);
        let shuffledCards = [];
        let arr = marioClone || [];
        while (arr.length !== 0) {
            let randoIdx = Math.floor(Math.random() * arr.length);
            shuffledCards.push(arr[randoIdx]);
            arr.splice(randoIdx, 1);
        }
        this.setState({
            renderedCards: shuffledCards
            .splice(0, 4)
            .map( mario => (
                <MarioCard
                  validatePick={this.validatePick}
                  id={mario.id}
                  key={mario.id}
                  name={mario.name}
                  image={mario.image}
                  />
            ))
        });
    };

    render() {
        return <div className="Grid">{this.state.renderedCards}</div>;
      }
    }

export default CardList;