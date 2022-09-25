import React, { useState } from "react"
import Modal from 'react-modal'
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import * as insightStyles from '../styling/style.module.css'
// Serve images from filesystem
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight'
import { FaShareAlt } from '@react-icons/all-files/fa/FaShareAlt'
import {AiOutlineCloseCircle} from '@react-icons/all-files/ai/AiOutlineCloseCircle'
import { GrClose } from '@react-icons/all-files/gr/GrClose'
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
// states
const [ newItems, setNewItems ] = useState({})
const [modalIsOpen, setModalIsOpen] = useState(false)
const [ modalData, setModalData ] = useState({
  title: '',
  date: '',
  coverImage: '',
  introduction: '',
  article: {},
})

console.log(modalData)

// toggle function for show more/less 
const toggleHandler = (id) => {
  setNewItems((txt) => ({
    ...txt,
    [id]: !txt[id],
  }));
};

// share functionality
const share = async (id) => {
  const shareData = {
    title: document.title,
    url: window.location.origin + `/insights/${id}`
  }

  try {
    await navigator.share( shareData )
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

// Modal.setAppElement('#root')
    return (

    <Layout>
        <section className={ insightStyles.container1 }>
        <div className= { insightStyles.grid}>
          <div className= { insightStyles.grid3Column }>
            { data?.allContentfulEduInsight.nodes.map((node, i) => (
              <div key={ node?.id } className= { insightStyles.grid3Columnflow}>
                <div className= { insightStyles.grid3ColumnflowImg}>
                  <img 
                    src={node?.coverImage.url} 
                    className={ insightStyles.grid3ColumnflowImage}
                  />
                </div> 
                <div className= { insightStyles.grid3ColumnText}>
                  <h4>{ node?.title }</h4>
                  <p>Posted { convertDate(node?.createdAt) }</p>
                </div>
              <div className= { insightStyles.grid3ColumnShowButton}>
                <Link>
                  <button onClick={
                              () => {
                                    setModalIsOpen(true)
                                    setModalData({
                                      title: node?.title,
                                      date: convertDate(node?.createdAt),
                                      coverImage: node?.coverImage.url,
                                      introduction: node?.introduction.introduction,
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
                      isOpen = {modalIsOpen} 
                      ariaHideApp={false}
                      onRequestClose = {() => setModalIsOpen(false)} 
                      style={{
                        overlay: {
                          backgroundColor: 'grey'
                        },
                        content: {
                          position: 'absolute',
                          left: '160px',
                          right: '160px',
                        }}}
                      className= {insightStyles.showModal}
                      >
                        <div className={ insightStyles.content1Close } >
                          <button onClick={() => setModalIsOpen(false)} ><AiOutlineCloseCircle/></button>
                        </div>
                        <div className={ insightStyles.content1Header } >
                          <h4>{ modalData.title }</h4>
                        </div>
                        <div className={ insightStyles.content1Paragraph } >
                          <p> By { modalData.date }</p>
                        </div>
                        <div className={ insightStyles.content1Image } >
                          <img
                            alt='carousel-image'
                            src={ modalData.coverImage }
                            className={insightStyles.contentImage }
                          />
                        </div>
                                
                        <div className={ insightStyles.content1Body }>
                          <p>{ modalData.introduction }</p>
                          { modalIsOpen && <p>{ renderRichText(modalData.article, options)}</p> }
                        </div> 
                        <div className= {insightStyles.share}>
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