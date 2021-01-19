import React, { Component } from 'react'
import CartItems from './CartItems'
import Total from './Total'

export default class Cart extends Component {
    render() {
        return (
          <section className="main__summary">
                <h2>Your cart</h2>
                {Object.keys(this.props.selected).map((feature, index) =>
                    <CartItems
                        featureElement={feature}
                        key={feature + '-' + index}
                        total={this.props.total}
                        selectedOption={this.props.selected[feature]}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                    />
                )}
                <Total
                    total={this.props.total}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            </section>

        )
    }
}