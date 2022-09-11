import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import { convertDate } from "../../utils/convertDate";

const EduSupportPostPage = (props) => {
    return (
        <Layout>
            <section style={{ padding: '2rem' }}>
                <img src={ props.data.contentfulEduSupport.image.url } />
                <h4>{ props.data.contentfulEduSupport.title }</h4>
                <p>{ convertDate(props.data.contentfulEduSupport.createdAt) }</p>
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