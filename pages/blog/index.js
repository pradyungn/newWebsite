import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import Container from '../../componenets/Container'

function blog(props) {
    return(
        <Container siteTitle="Notebook">
            <h1 style={{color: "#50fa7b"}}>Notebook</h1>
            <p>This is basically my version of a blog - except I'm not lazy enough to use wordpress. This section is still in development :)</p>
            <div className="fatline"></div>
            <div className='list'>
                {props.posts.map(post => (
                    <Link href={"/blog/"+post.slug}>
                        <a className="pcont invisible">
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
                    background-color: #44475a;
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 5%;
                    border: 3px solid #BD93f9;
                    cursor: pointer;
                    transition: 300ms ease;
                }

                .pcont:hover {
                    background-color: #282a36;
                    border: 3px solid #ff79c6;
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
