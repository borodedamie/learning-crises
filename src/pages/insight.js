import * as React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby";
import * as insightStyles from '../styling/style.module.css'
import { useQuery, gql } from '@apollo/client'
// Serve images from filesystem
import {AiOutlineArrowRight} from '@react-icons/all-files/Ai/AiOutlineArrowRight'

const GET_EDU_INSIGHTS = gql`
query {
    eduInsightCollection(limit: 10) {
      items {
        sys {
          id
          publishedAt
        }
      }
    }
  }
`;

const InsightPage = () => {
    const { data, loading, error } = useQuery(GET_EDU_INSIGHTS);
    console.log(data)
    
    if (loading) return 'Loading...';

    return (
    <Layout>
        <section className={ insightStyles.container1 }>
            <div>
                <div className={ insightStyles.content1Header } >
                    <h4>
                    Impact of Mother Tongue on Education in Nigeria
                    </h4>
                </div>
                <div className={ insightStyles.content1Paragraph } >
                    <p>
                    By Jane Doe and Dan Abrov, August 5, 2022
                    </p>
                </div>
                <div className={ insightStyles.content1Image } >
                <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 7.png'
                                className={insightStyles.contentImage }
                              />
                </div>
                <div className= { insightStyles.content1Body}>
                    <p>
                    Despite the significance of mother tongue (native) language in learning instructions, evidence suggests that Nigerian schools prefer
                    to communicate solely in the English (non-native) language. In this diagnostic study, we use data from the Nigeria Education Survey
                    to evaluate the correlation between language proficiency and academic performance – in this case numeracy competence. Our
                    findings show that school-aged children across all regions who are proficient in both mother tongue and English language, that is,
                    bilingual have a higher performance rate in numeracy competence than children who are more proficient in either Native or English
                    languages. 
                    </p>
                    <p>
                    This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe.
                    Despite the significance of mother tongue (native) language in learning instructions, evidence suggests that Nigerian schools prefer
                    to communicate solely in the English (non-native) language. In this diagnostic study, we use data from the Nigeria Education Survey
                    to evaluate the correlation between language proficiency and academic performance – in this case numeracy competence. Our
                    findings show that school-aged children across all regions who are proficient in both mother tongue and English language, that is,
                    bilingual have a higher performance rate in numeracy competence than children who are more proficient in either Native or English
                    languages. 
                    
                    </p>
                    <p>
                    This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe.
                    </p>
                    <button><Link>Show More</Link></button>
                    <span><Link><AiOutlineArrowRight/></Link></span> 
                </div>
            </div>
            <div className={ insightStyles.content1 } >
                <div className={ insightStyles.content1Header } >
                    <h4>
                    On The JAMB No-Zero Policy
                    </h4>
                </div>
                <div className={ insightStyles.content1Paragraph } >
                    <p>
                    By Jane Doe and Dan Abrov
                    </p>
                    <p>
                    August 5, 2022
                    </p>
                </div>
                <div className={ insightStyles.content1Image } >
                <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 8 (1).png'
                                className={insightStyles.contentImage }
                              />
                </div>
                <div className= { insightStyles.content1Body}>
                    <p>
                    Despite the significance of mother tongue (native) language in learning instructions, evidence suggests that Nigerian schools prefer
                    to communicate solely in the English (non-native) language. In this diagnostic study, we use data from the Nigeria Education Survey
                    to evaluate the correlation between language proficiency and academic performance – in this case numeracy competence. Our
                    findings show that school-aged children across all regions who are proficient in both mother tongue and English language, that is,
                    bilingual have a higher performance rate in numeracy competence than children who are more proficient in either Native or English
                    languages. 
                    </p>
                    <p>
                    This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe.
                    Despite the significance of mother tongue (native) language in learning instructions, evidence suggests that Nigerian schools prefer
                    to communicate solely in the English (non-native) language. In this diagnostic study, we use data from the Nigeria Education Survey
                    to evaluate the correlation between language proficiency and academic performance – in this case numeracy competence. Our
                    findings show that school-aged children across all regions who are proficient in both mother tongue and English language, that is,
                    bilingual have a higher performance rate in numeracy competence than children who are more proficient in either Native or English
                    languages. 
                    
                    </p>
                    <p>
                    This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe.
                    </p>
                    <button><Link>Show More</Link></button>
                    <span><Link><AiOutlineArrowRight/></Link></span> 
                </div>
            </div>
        </section>
    </Layout>
    )
}

export default InsightPage

export const Head = () => <title>EduInsight Page</title>