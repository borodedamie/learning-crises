import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { convertDate } from '../../utils/convertDate'

const EduDataPage = (props) => {
    console.log(props)
    return (
        <Layout>
            <section>
                <div>
                    <h4>{ props.data.contentfulEduData.title }</h4>
                </div>
                <div>
                    <p>Posted on { convertDate(props.data.contentfulEduData.createdAt) }</p>
                </div>
                <div>
                    <img 
                        alt='infographics image'
                        src={ props.data.contentfulEduData.infographics.url }
                    />
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