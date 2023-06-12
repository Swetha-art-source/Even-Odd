// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  incrementCount = () => {
    this.setState(prevState => {
      const randomIncrement = Math.floor(Math.random() * 101)
      const newCount = prevState.count + randomIncrement
      const newIsEven = newCount % 2 === 0
      return {count: newCount, isEven: newIsEven}
    })
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {isEven ? 'Even' : 'Odd'}</p>
          <button type="button" className="btn" onClick={this.incrementCount}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
