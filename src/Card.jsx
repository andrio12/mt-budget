import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            gemLvlClass: "free"
        };
    }

    add() {
        let n = this.state.number + 1;
        let gemLvl = (n <= 10) ? n : 0;
        this.setState({ number: gemLvl });
        this.props.calculate(this.props.player, gemLvl);
        this.setGemLvlClassName(gemLvl);
    }

    subtract() {
        let n = this.state.number - 1;
        let gemLvl = (n >= 0) ? n : 10;
        this.setState({ number: gemLvl });
        this.props.calculate(this.props.player, gemLvl);
        this.setGemLvlClassName(gemLvl);
    }

    setGemLvlClassName(gemLvl) {
        switch (gemLvl) {
            case 1:
                this.setState({ gemLvlClass: "bronze" });
                break;
            case 2:
                this.setState({ gemLvlClass: "silver" });
                break;
            case 3:
                this.setState({ gemLvlClass: "gold" });
                break;
            case 4:
                this.setState({ gemLvlClass: "emerald" });
                break;
            case 5:
                this.setState({ gemLvlClass: "saphire" });
                break;
            case 6:
                this.setState({ gemLvlClass: "ruby" });
                break;
            case 7:
                this.setState({ gemLvlClass: "amethyst" });
                break;
            case 8:
                this.setState({ gemLvlClass: "diamond" });
                break;
            case 9:
                this.setState({ gemLvlClass: "pink-diamond" });
                break;
            case 10:
                this.setState({ gemLvlClass: "galaxy-opal" });
                break;
            default:
                this.setState({ gemLvlClass: "free" });
        }    
    }

    render() {
        return (
            <section className={this.state.gemLvlClass}>
                <button onClick={(e) => this.add(e)}>+</button>
                <p className="gem-level">{this.state.gemLvlClass}</p>
                <button onClick={(e) => this.subtract(e)}>-</button>
            </section>
        )
    }
}

export default Card;