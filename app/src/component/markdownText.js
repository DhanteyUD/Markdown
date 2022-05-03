// Markdown Placeholder text
const markdownText = `# Hi, welcome to my React Markdown Previewer!

## This is a sub-heading...
### Shall we begin with the cool stuffs?... Right!:

Here's a div element, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line/block code:

function Example(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **BOLD**... OMG!
Or _italic_... Cool!
Or... wait for it... **_both!_**... Wow!
And feel free to be Thanos at this point and ~~cross stuff out~~.

There's also a [link](https://www.freecodecamp.org), and
> Block Quotes!... I feel like doing some karate on this but...

And if you want to get really intense, you can prepare a table... for dinner? Ok No!:

My Header | Your Header | Who do we give this to?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.

1. And there are numbered lists too.
1. Use this if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default markdownText;
