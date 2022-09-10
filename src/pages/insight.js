import * as React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby";
import * as insightStyles from '../styling/style.module.css'
// Serve images from filesystem
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight'
import { convertDate } from "../utils/convertDate";

const InsightPage = ({ data }) => {
    return (
    <Layout>
        <section className={ insightStyles.container1 }>
            { data?.allContentfulEduInsight.nodes.map((node, i) => (
            <div key={ node?.id }>
                <div className={ insightStyles.content1Header } >
                    <h4>
                    { node?.title }
                    </h4>
                </div>
                <div className={ insightStyles.content1Paragraph } >
                    <p>
                    By { node?.author }, { convertDate(node?.createdAt) }
                    </p>
                </div>
                <div className={ insightStyles.content1Image } >
                <img
                    alt='carousel-image'
                    src={node?.coverImage.url}
                    className={insightStyles.contentImage }
                />
                </div>
                <div className= { insightStyles.content1Body}>
                    <p>
                        { node?.introduction.introduction }
                    </p>
                    <div className= { insightStyles.content1Button}>
                        <button><Link>Show More</Link></button>
                        <span><Link><AiOutlineArrowRight/></Link></span> 
                    </div>
                    
                </div>
            </div>
            ))}
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
        }
        introduction {
          introduction
        }
        article {
          raw
        }
      }
    }
  }
`;

export default InsightPage

export const Head = () => <title>EduInsight Page</title>