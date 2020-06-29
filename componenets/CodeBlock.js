import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs"

export default (props) => {
    const { language, value } = props
    return (
        <SyntaxHighlighter language={language} style={dracula}>
            {value}
        </SyntaxHighlighter>
    )
}
