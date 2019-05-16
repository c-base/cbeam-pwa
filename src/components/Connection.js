import React from 'react'
import { cbeamPing } from '../api'

const ConnectionContext = React.createContext(false)

export class ConnectionProvider extends React.Component {
  state = {
    connected: false
  }

  update() {
    cbeamPing().then(connected =>
    this.setState({connected})
    )
  }

  startUpdating() {
    this.update(); // do it once and then start it up ...
    this._timer = setInterval(() => this.update(), 10000); //this.props.pollInterval);
  }

  componentDidMount() {
    this.startUpdating();
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  } 

  render() {
    const { children } = this.props;
    return <ConnectionContext.Provider value={this.state.connected}>{children}</ConnectionContext.Provider>
  }
}

const Connection = ConnectionContext.Consumer;

export default Connection