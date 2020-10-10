import matter from 'gray-matter'
import CodeBlock from '../../componenets/CodeBlock'
import ReactMarkdown from 'react-markdown'
import Container from '../../componenets/Container'
import Link from 'next/link'

export default function BlogTemplate(props) {
    let colors = new Map()
    colors['red'] = "#ac8a8c"
    colors['purple'] = "#8f8aac"
    colors['magenta'] = "#ac8aac"
    colors['orange'] = "#c6a679"
    colors['yellow'] = "#aca98a"
    colors['green'] = "#8aac8c"
    colors['cyan'] = "#8aabac"
    const markdownBody = props.content
    const frontmatter = props.data
    return (
        <Container siteTitle={frontmatter.title} description={frontmatter.blurb}>
            <Link href="/blog"><a>&larr; Go Back</a></Link>
            <div className="clap">
                <h1 className="gah" style={{color: colors[frontmatter.color]}}>{frontmatter.title}</h1>
                <h2 className="gah">{frontmatter.date.toString()}</h2>
            </div>
            <p>{frontmatter.blurb}</p>
            <div className="fatline"></div>
            <div>
                <ReactMarkdown source={markdownBody} renderers={{ code: CodeBlock }}/>
            </div>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
                .fatline{
                    width:100%;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #f8f8f2;
                }

                .clap{
                    width: 100%;
                    display: flex;
                }

                @media (max-width: 750px){
                    .clap {
                        flex-direction: column;
                    }

                    .gah {
                        margin: 0;
                    }
                }

                @media (min-width: 750px) {
                    .clap{
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: -25px;
                    }
                }

                code {
                    background: #44475a !important;
                    border-radius: 4px;
                }

                pre {
                    background: #44475a !important;
                    border-radius: 4px;
                    padding: 10px;
                    margin: 20px
                }

                code {
                    font-family: Roboto Mono, monospace;
                    font-size: 12px;
                }
            `}</style>
        </Container>
    )
}

BlogTemplate.getInitialProps = async function(context) {
    const { slug } = context.query
    const content = await import(`../../posts/${slug}.md`)
    const data = matter(content.default)
    return {
        ...data,
    }
}
