import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import Container from '../../componenets/Container'

function blog(props) {
    return(
        <Container siteTitle="Notebook" description="Basically my version of a blog - except I'm not lazy enough to use wordpress. I write about a variety of topic, primarily revolving around the tech space.">
            <h1 style={{color: "#c6a679"}}>Notebook</h1>
            <p>This is basically my version of a blog - except I'm not lazy enough to use wordpress. I tend to write all kinds of things - ethics, technology, keyboards, linux - whatever interests me at the moment :)</p>
            <div className="fatline"></div>
            <div className='list'>
                {props.posts.map(post => (
                    <Link href={"/blog/"+post.slug}>
                    <a className={"pcont invisible "+post.document.data.color}>
                            <div className="pcn">
                                <div className="phead">
                                    <h3>{post.document.data.title}</h3>
                                    <h4>{post.document.data.date}</h4>
                                </div>
                                <div className="smoline"></div>
                                    <p>{post.document.data.blurb}</p>
                                </div>
                        </a>
                    </Link>
                ))}
            </div>
            <style jsx global>{`
                .invisible {
                    font-style: normal;
                    text-decoration: none;
                    font-weight: 400;
                    color: #f8f8f2;
                }

                .invisible:hover {
                    color: #f8f8f2;
                }

                .list {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                } 

                .phead {
                    display: flex;
                    justify-content: space-between;
                }

                .pcont {
                    background-color: #0f0f0f;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 5%;
                    border: 3px solid #262626;
                    cursor: pointer;
                    transition: 300ms ease;
                }

                .pcont:hover {
                    transform: translate(-5px, -5px);
                    box-shadow: 5px 5px #262626;
                    text-decoration: none;
                }

                @media (min-width: 750px) {
                    .pcont {
                        width: 47.5%;
                    }

                    .list {
                        width: 100%;
                    }
                }

                @media (max-width: 750px) {
                    .pcont {
                        width: 100%;
                    }

                    .list {
                        width: 90%;
                        margin-left: 5%;
                    }
                }

                .pcn {
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                }
                
                .smoline {
                    height: 4px;
                    width: 100%;
                    border-radius: 2px;
                    background-color: #f8f8f2;
                }

                .fatline{
                    width:100%;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #f8f8f2;
                    margin-bottom: 20px;
                }
.cyan:hover{
    background: #8aabac;
    border-color: #8aabac;
}

.red:hover{
    background: #ac8a8c;
    border-color: #ac8a8c;
}

.yellow:hover{
    background: #aca98a;
    border-color: #aca98a;
}

.magenta:hover{
    background: #ac8aac;
    border-color: #ac8aac;
}

.green:hover{
    background: #8baa8c;
    border-color: #8baa8c;
}

.orange:hover{
    background: #c6a679;
    border-color: #c6a679;
}

.purple:hover{
    backgound: #8f8aac;
    border-color: #8f8aac;
}

            `} </style>
        </Container>
)
}

blog.getInitialProps = async function() {
    const posts = (context => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const slug = key
                .replace(/^.*[\\\/]/, '')
                .split('.')
                .slice(0, -1)
                .join('.')
            const value = values[index]
            const document = matter(value.default)
            return {
                document,
                slug,
            }
        })
        return data
    })(require.context('../../posts', true, /\.md$/))
    return {
        posts
    }
}
export default blog
