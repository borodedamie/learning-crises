import { Link, graphql, navigate } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { convertDate } from '../../utils/convertDate'
import * as dataPageStyles from '../../styling/style.module.css'

const EduDataPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <section className={dataPageStyles.container1}>
        <div className={dataPageStyles.shareHeader}>
          <h4>{props.data.contentfulEduData.title}</h4>
        </div>
        <div className={dataPageStyles.shareAuthor}>
          <p>Posted on {convertDate(props.data.contentfulEduData.createdAt)}</p>
        </div>
        <div className={dataPageStyles.shareImage}>
          <img
            alt='infographics'
            src={props.data.contentfulEduData.infographics.url}
            className={dataPageStyles.shareImagee}
          />
        </div>
        <div className={dataPageStyles.goButtonCon}>
          <button
            onClick={() => navigate(-1)}
            className={dataPageStyles.goButton}
          >Go Back</button>
        </div>
        <div className={dataPageStyles.moreSection}>
          <h1>You may also be interested in more content on EduData</h1>
          <div className={dataPageStyles.moreSectionGrids}>
            { props?.data.allContentfulEduData.nodes.map((node, i) => (
              <div className={dataPageStyles.moreSectionGrid} key={ node?.id }>
                <div className={dataPageStyles.moreSectionGridImage}>
                  <img alt='moreImage' src={ node?.infographics.url } className={dataPageStyles.moreSectionGridImg} />
                </div>
                <div>
                  <h3>{ node?.title }</h3>
                  <p>Posted on { convertDate(node?.createdAt) }</p>
                  <button><Link to={`/datas/${node.id}`}>View</Link></button>
                </div>
              </div>
            )) }
          </div>
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
    allContentfulEduData(filter: {createdAt: {lt: "TODAY"}}, limit: 3) {
      nodes {
        id
        createdAt
        title
        infographics {
          url
        }
      }
    }
  }
`;

export default EduDataPage

export const Head = () => <Seo title="EduData Post Page" />