import React, { Component } from 'react';
import MarkdownPreviewer from './Previewer';
import MarkdownEditor from './Editor';
import markdownText from './markdownText';
import { marked } from 'marked';

class MarkdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: markdownText,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  createMarkup() {
    var options = { sanitize: true };
    return { __html: marked(this.state.text, options) };
  }

  render() {
    return (
      <>
        <div>
          <MarkdownEditor
            onChange={this.handleChange}
            value={this.state.text}
          />
          <MarkdownPreviewer markup={this.createMarkup()} />
        </div>
        <p class="footer">
          &copy; Clinton Otse{' '}
          <a
            href="https://codepen.io/Clinton_Otse/"
            target="_blank"
            rel="noreferrer"
          >
            codepen<i class="fab fa-free-code-camp"></i>
          </a>
        </p>
      </>
    );
  }
}

export default MarkdownContainer;
