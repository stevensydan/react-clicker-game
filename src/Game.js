import React, { Component } from 'react'
import './Game.css'

class Game extends Component  {
    
    constructor(props) {
        super(props)
        this.state = {
            points: 0,          // current total points counter
            mult: 1,            // upgrade multiplier counter
            cost: 10,           // upgrade cost counter
            colorMult: 'gray'   // upgrade button color
        }
    }

    // When clicking the left button
    addPoints() {
        this.setState(prevState => ({
            points: prevState.points + this.state.mult
        }))
        console.log('Points:', this.state.points, '+', this.state.mult)

        if(this.state.cost <= this.state.points + this.state.mult)
        {// If enough points available to buy upgrade
            this.setState({colorMult: '#4CAF50'})
        }
        else
        {// If not enough points available to buy upgrade
            this.setState({colorMult: 'gray'})
        }
    }

    // When clicking the right button
    addMult() {
        if(this.state.cost <= this.state.points)
        {// Purchase if enough points to buy upgrade, subtracts points, increases multiplier and cost
            this.setState(prevState => ({
                points: prevState.points - prevState.cost,
                mult: prevState.mult + 1,
                cost: prevState.cost * 2,
                colorMult: 'gray'
            }))
            console.log('Multiplier:', this.state.mult + 1)
        }
        else {// Rejection if not enough points to buy upgrade
            this.setState({colorMult: 'red'})
            console.log('ERROR: Not enough points to upgrade!')
        }
    }

    render() {
        return (
            <div>
                {/*Live display of points*/}
                <div className = "total" id = "number">{this.state.points}</div>
                <div className = "total">total points!</div>

                {/*Two buttons*/}
                <button className = "button" id = "add" onClick={() => this.addPoints()}>Click for <b>+{this.state.mult} points</b></button>
                <button className = "button" id = "upgrade" style={{ backgroundColor: this.state.colorMult }} onClick={() => this.addMult()}>{this.state.cost} points to <b>upgrade</b></button>
            </div>   
        )
    }
}

export default Game