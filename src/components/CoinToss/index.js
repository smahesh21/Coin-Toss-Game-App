import {Component} from 'react'

import './index.css'

const HEAD_IMAGE = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMAGE = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headScore: 0,
    tailScore: 0,
    tossImage: HEAD_IMAGE,
  }

  onClickButton = () => {
    const {headScore, tailScore} = this.state

    const toss = Math.floor(Math.random() * 2)
    let latestHeadScore = headScore
    let latestTailScore = tailScore

    let tossImg = ''

    if (toss === 0) {
      tossImg = HEAD_IMAGE
      latestHeadScore += 1
    } else {
      tossImg = TAIL_IMAGE
      latestTailScore += 1
    }

    this.setState({
      tossImage: tossImg,
      headScore: latestHeadScore,
      tailScore: latestTailScore,
    })
  }

  render() {
    const {headScore, tailScore, tossImage} = this.state
    const totalScore = headScore + tailScore
    console.log(totalScore)
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} className="toss-image" alt="toss result" />
          <div>
            <button
              type="button"
              className="toss-button"
              onClick={this.onClickButton}
            >
              Toss Coin
            </button>
          </div>
          <div className="result-container">
            <p className="result">Total: {totalScore}</p>
            <p className="result">Heads: {headScore}</p>
            <p className="result">Tails: {tailScore}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
