import { graphql, navigate } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { convertDate } from '../../utils/convertDate'
import * as dataPageStyles from '../../styling/style.module.css'

const EduDataPage = (props) => {
    console.log(props)
    return (
        <Layout>
            <section className= {dataPageStyles.container1}>
                <div  className= {dataPageStyles.shareHeader}>
                    <h4>{ props.data.contentfulEduData.title }</h4>
                </div>
                <div className= {dataPageStyles.shareAuthor}>
                    <p>Posted on { convertDate(props.data.contentfulEduData.createdAt) }</p>
                </div>
                <div className= {dataPageStyles.shareImage}>
                    <img 
                        alt='infographics image'
                        src={ props.data.contentfulEduData.infographics.url }
                        className = {dataPageStyles.shareImagee}
                    />
                </div>
                <div>
                  <button  
                    style={{margin : "40px"}}
                    onClick={ () => navigate(-1) }
                  >Go Back</button>                             
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    contentfulEduData(id: {eq: $id}) {
      id
      createdAt
      infographics {
        url
        gatsbyImageData(layout: FULL_WIDTH)
      }
      title
    }
  }
`;

export default EduDataPage

export const Head = () => <Seo title="EduData Post Page" />