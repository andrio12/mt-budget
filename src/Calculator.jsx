import React from 'react';
import Card from './Card';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            allPlayers: [],
            totalAmount: 0
        };
    }

    getPlayerAndGemLevel = (playerId, gemLvl) => {
        console.log("allplayers", this.state.allPlayers);
        let players = this.state.allPlayers;
        let playerFound = false;
        
        if (players.length == 0) {
            players.push({playerId: playerId, gemLvlId: gemLvl});
        } else {
            players.map((player, i) => {
                if (player.playerId == playerId){
                    playerFound = true;
                    players[i].gemLvlId = gemLvl;
                }
            })

            if (!playerFound){
                players.push({playerId: playerId, gemLvlId: gemLvl});
            }
        }
        
        this.calculateTotalAmount()
    }

    calculateTotalAmount() {
        let players = this.state.allPlayers;
        let sum = 0;

        players.map((player, i) => {
            sum += player.gemLvlId * 8;
        })

        this.setState({totalAmount: sum});
    }

    render() {
        return (
            <section className="calculator">
                <div className="totals">
                    <p>Total amount: {this.state.totalAmount} MT</p>
                </div>

                <div className="starters">
                    <Card player="1" calculate={this.getPlayerAndGemLevel} />
                    <Card player="2" calculate={this.getPlayerAndGemLevel} />
                    <Card player="3" calculate={this.getPlayerAndGemLevel} />
                    <Card player="4" calculate={this.getPlayerAndGemLevel} />
                    <Card player="5" calculate={this.getPlayerAndGemLevel} />
                </div>

                <div className="bench">
                    <Card player="6" calculate={this.getPlayerAndGemLevel} />
                    <Card player="7" calculate={this.getPlayerAndGemLevel} />
                    <Card player="8" calculate={this.getPlayerAndGemLevel} />
                    <Card player="9" calculate={this.getPlayerAndGemLevel} />
                    <Card player="10" calculate={this.getPlayerAndGemLevel} />

                    <Card player="11" calculate={this.getPlayerAndGemLevel} />
                    <Card player="12" calculate={this.getPlayerAndGemLevel} />
                    <Card player="13" calculate={this.getPlayerAndGemLevel} />
                </div>

            </section>
        )
    }
}

export default Calculator;