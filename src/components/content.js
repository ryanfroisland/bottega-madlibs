import React, { Component } from 'react';

class Content extends Component {

    constructor () {
        super()
        this.count=1;
    }
    renderLabel() {
        return[
            <div className="card__content__label">{this.count++}</div>,<b>{data}</b>
        ]
    }

    render () {
        const data = this.props.data
        return (
            <div className="card__content">
                <p>
                    Ladies and gentlemen, this is {this.renderLabel()} Barber, your sportscaster, bringing you the last inning of the game between the Cleveland {this.renderLabel(data.pluralNoun)} and the {this.renderLabel(data.adjectiveOne)} Yankees. {this.renderLabel(data.celebOne)} is pitching for the Yankees. Here's the pitch! It's a low {this.renderLabel(data.adjectiveTwo)} ball that just cuts the inside of the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numberOne}</b> strikes and <b>{data.numberTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.nounTwo}</b> out to <b>{data.adjectiveThree}</b> field. But <b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebThree}</b>, the Cleveland <b>{data.adjectiveFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree}</b>. <b>{data.celebFour}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjectiveFive}</b> League!
                </p>
            </div>
        )
    }
}

export default Content;