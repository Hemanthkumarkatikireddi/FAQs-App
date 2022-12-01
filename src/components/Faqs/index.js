// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqsItems from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">FAQs</h1>
          <div className="faqs-container">
            {faqsList.map(every => (
              <FaqsItems key={every.id} details={every} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
