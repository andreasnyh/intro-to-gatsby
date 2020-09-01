import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

export default function postTemplate({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <div>
        <Link to="/blog">⬅ Back to posts</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h5>
          Posted by {post.frontmatter.author} on{" "}
          {post.frontmatter.date}
        </h5>
        <div>{post.excerpt}</div><br/><br/>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        author
        date
      }
      excerpt
    }
  }
`
