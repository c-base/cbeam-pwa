import React from "react";

import Price from "../components/Price";

const COINS = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10];

class BarAbrechnung extends React.Component {
  constructor(props) {
    super(props);
    this.state = COINS.reduce((state, _, index) => {
      const newState = {};
      newState[index] = null;
      return { ...state, ...newState };
    }, {});
  }
  handleChange(event, index) {
    const value = Number(event.target.value);
    const newState = {};
    newState[index] = value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form>
            <table>
              <thead>
                <tr>
                  <td>Coin</td>
                  <td>Amount</td>
                  <td>Value</td>
                </tr>
              </thead>
              <tbody>
                {COINS.map((coin, index) => (
                  <tr key={coin}>
                    <td align="right">
                      <Price cents={coin} />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        onChange={e => this.handleChange(e, index)}
                        value={this.state[index] || ""}
                      />
                    </td>
                    <td align="right">
                      <Price cents={(this.state[index] || 0) * coin} />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td> </td>
                  <td>Sum:</td>
                  <td>
                    <Price
                      cents={Object.keys(this.state).reduce(
                        (p, key) => p + this.state[key] * COINS[key],
                        0
                      )}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default BarAbrechnung;
