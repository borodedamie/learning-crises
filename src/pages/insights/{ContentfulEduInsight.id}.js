import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { convertDate } from '../../utils/convertDate'

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

const EduInsightSharePage = (props) => {
    return (
        <Layout>
            <section>
                <div>
                    <h4>{ props.data.contentfulEduInsight.title }</h4>
                </div>
                <div>
                    <p>By { props.data.contentfulEduInsight.author }, { convertDate(props.data.contentfulEduInsight.createdAt) }</p>
                </div>
                <div>
                    <img 
                        alt='cover-image'
                        src={ props.data.contentfulEduInsight.coverImage.url }
                    />
                </div>
                <div>
                    <p>{ props.data.contentfulEduInsight.introduction.introduction }</p>
                </div>
                <div>{ renderRichText( props.data.contentfulEduInsight.article, options ) }</div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    contentfulEduInsight(id: {eq: $id }) {
      id
      createdAt
      title
      author
      coverImage {
        url
        gatsbyImageData(layout: FULL_WIDTH)
      }
      introduction {
        introduction
        childrenMarkdownRemark {
          html
        }
      }
      article {
        raw
      }
    }
  }  
`;

export default EduInsightSharePage

export const Head = () => <Seo title="EduInsight Data Page" />
