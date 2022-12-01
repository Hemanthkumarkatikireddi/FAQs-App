// Write your code here.
import {Component} from 'react'
import './index.css'

const plus = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
    alt="plus"
    className="btnImg"
  />
)
const minus = (
  <img
    src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
    alt="minus"
    className="btnImg"
  />
)

class FaqsItems extends Component {
  state = {
    isActive: false,
  }

  onClickButton = () => {
    this.setState(prev => ({
      isActive: !prev.isActive,
    }))
  }

  render() {
    const {details} = this.props
    const {isActive} = this.state
    const {questionText, answerText} = details

    return (
      <li className="faqs-list">
        <div className="faqs-list-1">
          <h1>{questionText}</h1>
          <button
            type="button"
            className="btn"
            id={details.id}
            onClick={this.onClickButton}
          >
            {isActive ? minus : plus}
          </button>
        </div>
        {isActive ? (
          <div>
            <hr width="%" /> <p className="answer-text">{answerText}</p>
          </div>
        ) : (
          ''
        )}
      </li>
    )
  }
}
;<hr width="90%" color="red" />

export default FaqsItems
