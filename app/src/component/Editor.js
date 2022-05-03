import React, { Component } from 'react';

class MarkdownEditor extends Component {
  render() {
    return (
      <div className="editor">
        <h4>&#9998; Markdown editor</h4>
        <textarea
          onChange={this.props.onChange}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}

export default MarkdownEditor;
