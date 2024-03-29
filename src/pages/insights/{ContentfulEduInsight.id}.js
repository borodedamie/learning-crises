import { Link, graphql, navigate } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import * as insightPageStyles from '../../styling/style.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri}>{children}</a>
      )
    }
  },
  [BLOCKS.HEADING_2]: (node, children) => {
    return <h2>{children}</h2>
  }
}

const EduInsightSharePage = (props) => {
  return (
    <Layout>
      <section className={insightPageStyles.container1}>
        <div className={insightPageStyles.insightContent}>
          <div className={insightPageStyles.shareHeader} >
            <h4>{props.data.contentfulEduInsight.title}</h4>
          </div>
          <div className={insightPageStyles.shareAuthor}>
            <p>By {props.data.contentfulEduInsight.author}, {props.data.contentfulEduInsight.date}</p>
          </div>
          <div className={insightPageStyles.shareImage}>
            <GatsbyImage
              alt='cover'
              image={getImage(props.data.contentfulEduInsight.coverImage)}
              className={insightPageStyles.viewImage}
            />
          </div>
          <div className={insightPageStyles.shareText}>{renderRichText(props.data.contentfulEduInsight.article, options)}</div>
          <div className={insightPageStyles.goButtonCon}>
            <button
              onClick={() => navigate(-1)}
              className={insightPageStyles.goButton}
            >Go Back</button>
          </div>
        </div>
        <div className={insightPageStyles.moreSection}>
          <h1>You may also be interested in more content on EduInsight</h1>
          <div className={insightPageStyles.moreSectionGrids}>
            {props?.data.allContentfulEduInsight.nodes.map((node, i) => (
              <div className={insightPageStyles.moreSectionGrid} key={node?.id}>
                <div className={insightPageStyles.moreSectionGridImage}>
                  <GatsbyImage alt='moreImage' image={getImage(node?.coverImage)} className={insightPageStyles.moreSectionGridImg} />
                </div>
                <div>
                  <h3>{node?.title}</h3>
                  <p>By {node?.author}</p>
                  <p>{node?.date}</p>
                  <button><Link to={`/insights/${node.id}`}>Read More</Link></button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      date
      coverImage {
        url
        gatsbyImageData(formats: WEBP)
      }
      article {
          raw
      }
    }
    allContentfulEduInsight(filter: {createdAt: {lt: "TODAY"}}, limit: 3) {
      nodes {
        id
        title
        author
        createdAt
        coverImage {
          gatsbyImageData(formats: WEBP)
        }
        date
      }
    }
  }  
`;

export default EduInsightSharePage

export const Head = () => <Seo title="EduInsight Data Page" />
