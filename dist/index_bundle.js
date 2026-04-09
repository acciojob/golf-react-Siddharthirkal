import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };

        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.moveBall = this.moveBall.bind(this);   // REQUIRED FIX
    };

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
    }

    moveBall(event) {
        if (event.keyCode === 39) {  // Right Arrow
            this.setState((prevState) => {
                const newPos = prevState.posi + 5;
                return {
                    posi: newPos,
                    ballPosition: { left: newPos + "px" }
                };
            });
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.moveBall);
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return (
                <div
                    className="ball"
                    style={{
                        position: "relative",   
                        ...this.state.ballPosition
                    }}
                ></div>
            );
        } else {
            return (
                <button className="start" onClick={this.buttonClickHandler}>
                    Start
                </button>
            );
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;