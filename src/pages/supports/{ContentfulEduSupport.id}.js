import * as React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../../components/layout/layout'
import { convertDate } from "../../utils/convertDate"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import * as supportPageStyles from '../../styling/style.module.css'
import Seo from '../../components/seo'

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

const EduSupportPostPage = (props) => {
  return (
    <Layout>
      <section>
        <div className={supportPageStyles.view}>
          <div className={supportPageStyles.viewImg}>
            <img src={props.data.contentfulEduSupport.image.url} alt="support-post" className={supportPageStyles.viewImage} />
          </div>
          <div className={supportPageStyles.viewText}>
            <h4>{props.data.contentfulEduSupport.title}</h4>
            <h6>Posted {convertDate(props.data.contentfulEduSupport.createdAt)}</h6>
            <p>{renderRichText(props.data.contentfulEduSupport.post, options)}</p>
          </div>
        </div>
        <div className={supportPageStyles.goButtonCon} >
          <button
            onClick={() => navigate(-1)}
            className={supportPageStyles.goButton}
          >Go Back</button>
        </div>
        <div className={supportPageStyles.moreSection}>
          <h1>You may also be interested in more content on EduSupport</h1>
          <div className={supportPageStyles.moreSectionGrids}>
            {props?.data.allContentfulEduSupport.nodes.map((node, i) => (
              <div className={supportPageStyles.moreSectionGrid} key={ node?.id }>
                <div className={supportPageStyles.moreSectionGridImage}>
                  <img alt='moreImage' src={ node?.image.url } className={supportPageStyles.moreSectionGridImg} />
                </div>
                <div>
                  <h3>{ node?.title }</h3>
                  <p>By { node?.author }</p>
                  <p>{ convertDate(node?.createdAt) }</p>
                  <button><Link to={`/supports/${node.id}`}>Read More</Link></button>
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
    allContentfulEduSupport(filter: {createdAt: {lt: "TODAY"}}, limit: 3) {
      nodes {
        id
        createdAt
        title
        image {
          url
        }
      }
    }
  }
  
`;

export default EduSupportPostPage

export const Head = () => <Seo title="EduSupport Data Page" />
