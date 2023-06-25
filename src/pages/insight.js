import React, { useState } from "react"
import Modal from 'react-modal'
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import * as insightStyles from '../styling/style.module.css'
// Serve images from filesystem
import { FaShareAlt } from '@react-icons/all-files/fa/FaShareAlt'
import { GrClose } from '@react-icons/all-files/gr/GrClose'
import Seo from "../components/seo"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// set render options for the JSON file fetched from Contentful 
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>
  },
  renderNode: {
    "embedded-asset-block": node => {
      const { gatsbyImageData } = node.data.target
      if (!gatsbyImageData) {
        // asset is not an image
        return null
      }
      return <GatsbyImage image={gatsbyImageData} />
    },
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
  },

  [BLOCKS.TABLE]: (node, children) => (
    <table>
      <tbody>{children}</tbody>
    </table>
  ),
  [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
  [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,

}

const InsightPage = ({ data }) => {
  // states
  const [newItems, setNewItems] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState({
    id: '',
    title: '',
    date: '',
    coverImage: '',
    article: {},
  })

  // share functionality
  const share = async (id) => {
    const shareData = {
      title: document.title,
      url: window.location.origin + `/insights/${id}`
    }

    try {
      await navigator.share(shareData)
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }

  // Modal.setAppElement('#root')
  return (

    <Layout>
      <section>
        <div className={insightStyles.grid}>
          <div className={insightStyles.grid3Column}>
            {data?.allContentfulEduInsight.nodes.map((node, i) => (
              <div key={node?.id} >
                <div className={insightStyles.grid3ColumnflowImg}>
                  <GatsbyImage
                    image={getImage(node?.coverImage)}
                    alt="eduInsight"
                    className={insightStyles.grid3ColumnflowImage}
                  />
                </div>
                <div className={insightStyles.gridColumnText}>
                  <h4>{node?.title}</h4>
                  <p>Posted {node?.date}</p>
                </div>
                <div className={insightStyles.gridColumnButton}>
                  <Link>
                    <button onClick={
                      () => {
                        setModalIsOpen(true)
                        setModalData({
                          id: node?.id,
                          title: node?.title,
                          date: node?.date,
                          coverImage: node?.coverImage,
                          article: node?.article
                        }
                        )
                      }
                    }
                    >Show More</button>
                  </Link>
                </div>
              </div>
            ))}
            <Modal
              isOpen={modalIsOpen}
              ariaHideApp={false}
              onRequestClose={() => setModalIsOpen(false)}
              className={insightStyles.content1Modal}
              overlayClassName={insightStyles.content1ModalOverlay}
            >
              <div className={insightStyles.content1Close} >
                <button onClick={() => setModalIsOpen(false)} ><GrClose /></button>
              </div>
              <div className={insightStyles.content1Header} >
                <h4>{modalData.title}</h4>
              </div>
              <div className={insightStyles.content1Paragraph} >
                <p> By {modalData.date}</p>
              </div>
              <div className={insightStyles.content1Image} >
                <GatsbyImage
                  alt='carousel'
                  image={getImage(modalData.coverImage)}
                  className={insightStyles.contentImage}
                />
              </div>

              <div className={insightStyles.content1Body}>
                {modalIsOpen && <p>{renderRichText(modalData.article, options)}</p>}
              </div>
              <div className={insightStyles.share} onClick={() => share(modalData.id)}>
                <h6>Share <p><FaShareAlt /></p></h6>
              </div>
            </Modal>
          </div>
        </div>
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
        gatsbyImageData(formats: WEBP)
      }
      article {
        raw
      }
      date
    }
  }
}
`;

export default InsightPage

export const Head = () => <Seo title="EduInsight Page" />