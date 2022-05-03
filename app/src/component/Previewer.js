import React, { Component } from 'react';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <div className="preview">
        <h4>&#9989; Markdown previewer</h4>
        <div dangerouslySetInnerHTML={this.props.markup}></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
