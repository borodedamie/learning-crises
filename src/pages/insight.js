import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby";
import * as insightStyles from '../styling/style.module.css'
import { useQuery, gql } from '@apollo/client'
// Serve images from filesystem
import {AiOutlineArrowRight} from '@react-icons/all-files/ai/AiOutlineArrowRight'

const GET_EDU_INSIGHTS = gql`
query GetEduInsights {
    eduInsightCollection(limit: 10) {
        items {
          sys {
            id
            publishedAt
          }
          title
          author
          coverImage {
             url
          }
          introduction
          article {
            json
          }
        }
      }
  }
`;

const InsightPage = () => {
    const { data, loading, error } = useQuery(GET_EDU_INSIGHTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
    <Layout>
        <section className={ insightStyles.container1 }>
            { data?.eduInsightCollection.items.map((item, i) => (
            <div key={ item?.sys.id }>
                <div className={ insightStyles.content1Header } >
                    <h4>
                    { item?.title }
                    </h4>
                </div>
                <div className={ insightStyles.content1Paragraph } >
                    <p>
                    By { item?.author }, { item?.sys.publishedAt }
                    </p>
                </div>
                <div className={ insightStyles.content1Image } >
                <img
                    alt='carousel-image'
                    src={item?.coverImage.url}
                    className={insightStyles.contentImage }
                />
                </div>
                <div className= { insightStyles.content1Body}>
                    <p>
                        { item?.introduction }
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

export default InsightPage

export const Head = () => <title>EduInsight Page</title>