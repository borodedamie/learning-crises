import { graphql, navigate } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { convertDate } from '../../utils/convertDate'
import * as insightPageStyles from '../../styling/style.module.css'
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

const EduInsightSharePage = (props) => {
    return (
        <Layout>
            <section>
                <div  className= {insightPageStyles.shareHeader} >
                    <h4>{ props.data.contentfulEduInsight.title }</h4>
                </div>
                <div className= {insightPageStyles.shareAuthor}>
                    <p>By { props.data.contentfulEduInsight.author }, { convertDate(props.data.contentfulEduInsight.createdAt) }</p>
                </div>
                <div className= {insightPageStyles.shareImage}>
                    <img 
                        alt='cover'
                        src={ props.data.contentfulEduInsight.coverImage.url }
                        className = {insightPageStyles.shareImagee}
                    />
                </div>
                <div className={insightPageStyles.shareText}>{ renderRichText( props.data.contentfulEduInsight.article, options ) }</div>
                <div className = {insightPageStyles.goButtonCon}>
                  <button
                    onClick={ () => navigate(-1) }
                    className = {insightPageStyles.goButton}
                  >Go Back</button>                             
                </div>
                <div className={insightPageStyles.moreSection}>
                  <h1>You may also be interested in more content on EduInsight</h1>
                  <div className={insightPageStyles.moreSectionGrids}>
                      <div className= {insightPageStyles.moreSectionGrid}>
                        <div className= {insightPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {insightPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>Impact of Mother Tongue on Education in Nigeria</h3>
                          <p>By Jane Doe and Dan Abrov</p>
                          <p>August 5, 2022</p>
                          <button>Read More</button>
                        </div>  
                      </div>
                      <div className= {insightPageStyles.moreSectionGrid}>
                        <div className= {insightPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {insightPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>Impact of Mother Tongue on Education in Nigeria</h3>
                          <p>By Jane Doe and Dan Abrov</p>
                          <p>August 5, 2022</p>
                          <button>Read More</button>
                        </div>  
                      </div>
                      <div className= {insightPageStyles.moreSectionGrid}>
                        <div className= {insightPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {insightPageStyles.moreSectionGridImg}/>
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
    contentfulEduInsight(id: {eq: $id }) {
      id
      createdAt
      title
      author
      coverImage {
        url
        gatsbyImageData(layout: FULL_WIDTH)
      }
      article {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }  
`;

export default EduInsightSharePage

export const Head = () => <Seo title="EduInsight Data Page" />
