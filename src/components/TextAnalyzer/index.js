import {Component} from 'react'

import './index.css'

class TextAnalyzer extends Component {
  constructor(props) {
    super(props)

    // Initial state
    this.state = {
      text: '',
      wordCount: 0,
      uniqueWordCount: 0,
      charCount: 0,
      searchString: '',
      replaceString: '',
    }
  }

  // Handle text input change
  handleTextChange = e => {
    this.setState({text: e.target.value}, this.updateStatistics)
  }

  // Handle the input changes for search and replace strings
  handleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  // Handle string replacement
  handleReplace = () => {
    const {text, searchString, replaceString} = this.state
    this.setState(
      {text: text.replaceAll(searchString, replaceString)},
      this.updateStatistics,
    )
  }

  // Method to update word count, unique word count, and character count
  updateStatistics = () => {
    const {text} = this.state

    // Extract words from the text
    const words = text.match(/\b\w+\b/g) || []
    const uniqueWords = new Set(words.map(word => word.toLowerCase()))
    const characters = text.replace(/[^\w]/g, '') // Remove spaces and punctuation

    // Update the state with the new statistics
    this.setState({
      wordCount: words.length,
      uniqueWordCount: uniqueWords.size,
      charCount: characters.length,
    })
  }

  render() {
    const {
      text,
      wordCount,
      uniqueWordCount,
      charCount,
      searchString,
      replaceString,
    } = this.state

    return (
      <div className="text-analyzer-container">
        <h1>Text Analyzer</h1>

        {/* Textarea for input */}
        <textarea
          value={text}
          onChange={this.handleTextChange}
          placeholder="Enter your text here..."
          rows="10"
          cols="50"
        />

        {/* Displaying statistics */}
        <div className="statistics">
          <p>Total Words: {wordCount}</p>
          <p>Unique Words: {uniqueWordCount}</p>
          <p>Character Count (excluding spaces/punctuation): {charCount}</p>
        </div>

        {/* String Replacement Section */}
        <div className="replacement-section">
          <input
            type="text"
            name="searchString"
            placeholder="String to search"
            value={searchString}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="replaceString"
            placeholder="String to replace with"
            value={replaceString}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleReplace}>
            Replace String
          </button>
        </div>
      </div>
    )
  }
}

export default TextAnalyzer
