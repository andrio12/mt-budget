import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    add() {
        let n = this.state.number + 1;
        let gemLvl = (n <= 10) ? n : 0;
        this.setState({ number: gemLvl });
        this.props.calculate(this.props.player, gemLvl);
    }

    subtract() {
        let n = this.state.number - 1;
        let gemLvl = (n >= 0) ? n : 10;
        this.setState({ number: gemLvl });
        this.props.calculate(this.props.player, gemLvl);
    }

    render() {
        return (
            <section className="card">
                <button onClick={(e) => this.add(e)}>+</button>
                <p className="mt-amount">{this.state.number}</p>
                <button onClick={(e) => this.subtract(e)}>-</button>
            </section>
        )
    }
}

export default Card;