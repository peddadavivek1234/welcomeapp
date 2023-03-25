// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {isSubscribe: true}

  renderAuthButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return <button>Subscribed</button>
    }
    return <button>Subscribe</button>
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h1>Thank you! Happy Learning</h1>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
