import * as React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../../components/layout/layout'
import { convertDate } from "../../utils/convertDate"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import * as supportPageStyles from '../../styling/style.module.css'
import Seo from '../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

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
            <section>
              <div className = {supportPageStyles.view}>
                <div className = {supportPageStyles.viewImg}>
                  <img src={ props.data.contentfulEduSupport.image.url } alt="support-post" className = {supportPageStyles.viewImage} />
                </div>
                <div className = {supportPageStyles.viewText}>
                    <h4>{ props.data.contentfulEduSupport.title }</h4>
                    <h6>Posted { convertDate(props.data.contentfulEduSupport.createdAt) }</h6>
                    <p>{ renderRichText(props.data.contentfulEduSupport.post, options) }</p>
                </div>  
              </div>
              <div className = {supportPageStyles.goButtonCon} >
                  <button  
                    onClick={ () => navigate(-1) }
                    className = {supportPageStyles.goButton}
                  >Go Back</button>                             
              </div>
              <div className={supportPageStyles.moreSection}>
                  <h1>You may also be interested in more content on EduSupport</h1>
                  <div className={supportPageStyles.moreSectionGrids}>
                      <div className= {supportPageStyles.moreSectionGrid}>
                        <div className= {supportPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {supportPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>Impact of Mother Tongue on Education in Nigeria</h3>
                          <p>By Jane Doe and Dan Abrov</p>
                          <p>August 5, 2022</p>
                          <button>Read More</button>
                        </div>  
                      </div>
                      <div className= {supportPageStyles.moreSectionGrid}>
                        <div className= {supportPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {supportPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>Impact of Mother Tongue on Education in Nigeria</h3>
                          <p>By Jane Doe and Dan Abrov</p>
                          <p>August 5, 2022</p>
                          <button>Read More</button>
                        </div>  
                      </div>
                      <div className= {supportPageStyles.moreSectionGrid}>
                        <div className= {supportPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {supportPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>Impact of Mother Tongue on Education in Nigeria</h3>
                          <p>By Jane Doe and Dan Abrov</p>
                          <p>August 5, 2022</p>
                          <button>Read More</button>
                        </div>  
                      </div>
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
  }
  
`;

export default EduSupportPostPage

export const Head = () => <Seo title="EduSupport Data Page" />
