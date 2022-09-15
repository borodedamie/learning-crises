import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import { convertDate } from "../../utils/convertDate"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import * as supportPageStyles from '../../styling/style.module.css'

const options = {
  renderMark: {
    [ MARKS.BOLD ]: ( text ) => <b>{ text }</b>
  },
  renderNode: {
    [ BLOCKS.PARAGRAPH ]: (node, children) => <p>{ children }</p>,
    [ INLINES.HYPERLINK ]: ( node, children ) => {
      const { uri } = node.data
      return (
        <a href={ uri }>{ children }</a>
      )
    }
  },
    [ BLOCKS.HEADING_2 ]: ( node, children ) => {
      return <h2>{ children }</h2>
  }
}

const EduSupportPostPage = (props) => {
    return (
        <Layout>
            <section style={{ padding: '2rem' }} >
              <div >
              <img src={ props.data.contentfulEduSupport.image.url } />
                <h4>{ props.data.contentfulEduSupport.title }</h4>
                <p>Posted { convertDate(props.data.contentfulEduSupport.createdAt) }</p>
                <div>{ renderRichText(props.data.contentfulEduSupport.post, options) }</div>
              </div>
                
            </section>
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    contentfulEduSupport(id: {eq: $id }) {
      id
      title
      image {
        url
      }
      post {
        raw
      }
      createdAt
    }
  }
  
`;

export default EduSupportPostPage