import * as React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import * as insightStyles from '../styling/style.module.css'
// Serve images from filesystem
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight'
import { convertDate } from "../utils/convertDate"
import Seo from "../components/seo"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

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


const InsightPage = ({ data }) => {
    return (
    <Layout>
        <section className={ insightStyles.container1 }>
            { data?.allContentfulEduInsight.nodes.map((node, i) => (
            <div key={ node?.id }>
                <div className={ insightStyles.content1Header } >
                    <h4>
                    { node?.title }
                    </h4>
                </div>
                <div className={ insightStyles.content1Paragraph } >
                    <p>
                    By { node?.author }, { convertDate(node?.createdAt) }
                    </p>
                </div>
                <div className={ insightStyles.content1Image } >
                <img
                    alt='carousel-image'
                    src={node?.coverImage.url}
                    className={insightStyles.contentImage }
                />
                </div>
                <div className= { insightStyles.content1Body}>
                    <p>
                        { node?.introduction.introduction }
                    </p>
                    <div className= { insightStyles.content1Button}>
                        <button><Link>Show More <span><AiOutlineArrowRight/></span></Link></button>
                    </div>
                    <div>{ renderRichText(node?.article, options)}</div>                  
                </div>
            </div>
            ))}
        </section>
    </Layout>
    )
}

export const query = graphql`
query EduInsights {
  allContentfulEduInsight(limit: 10) {
    nodes {
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
        childMarkdownRemark {
          html
        }
      }
      article {
        raw
      }
    }
  }
}
`;

export default InsightPage

export const Head = () => <Seo title="EduInsight Page" />