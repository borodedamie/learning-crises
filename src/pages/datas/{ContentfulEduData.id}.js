import { Link, graphql, navigate } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import * as dataPageStyles from '../../styling/style.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EduDataPage = (props) => {
  const image = getImage(props.data.contentfulEduData.infographics)

  return (
    <Layout>
      <section className={dataPageStyles.container1}>
        <div className={dataPageStyles.shareHeader}>
          <h4>{props.data.contentfulEduData.title}</h4>
        </div>
        <div className={dataPageStyles.shareAuthor}>
          <p>Posted on {props.data.contentfulEduData.date}</p>
        </div>
        <div className={dataPageStyles.shareImage}>
          <GatsbyImage
            image={image}
            alt={props.data.contentfulEduData.infographics_alt}
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
                  <GatsbyImage alt={ getImage(node?.infographics_alt) } image={ getImage(node?.infographics) } className={dataPageStyles.moreSectionGridImg} />
                </div>
                <div>
                  <h3>{ node?.title }</h3>
                  <p>Posted on { node?.date }</p>
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
        gatsbyImageData(formats: WEBP)
      }
      title
      date
    }
    allContentfulEduData(filter: {createdAt: {lt: "TODAY"}}, limit: 3) {
      nodes {
        id
        createdAt
        title
        infographics {
          gatsbyImageData(formats: WEBP)
        }
        date
      }
    }
  }
`;

export default EduDataPage

export const Head = () => <Seo title="EduData Post Page" />