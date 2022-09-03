import * as React from "react"
import { useState } from "react";
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby";
import * as insightStyles from '../styling/style.module.css'


// Serve images from filesystem
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'
import { AiOutlineShareAlt} from '@react-icons/all-files/ai/AiOutlineShareAlt'

const InsightPage = () => {
    const [isReadMore, setReadMore] = useState(false)
    const toggleBtn =() => {
        setReadMore(prevState => !prevState)
    }
    return (
    <Layout>
        <section className={ insightStyles.container1 }>
            <div className={ insightStyles.content1 } >
                <div className={ insightStyles.content1Header } >
                    <h4>Impact of Mother Tongue on Education in Nigeria </h4>
                </div>
                <div className={ insightStyles.content1Paragraph } >
                    <p>By Jane Doe and Dan Abrov </p>
                    <p>August 5, 2022 </p>
                </div>
                <div className={ insightStyles.content1Image } >
                    <StaticImage 
                        alt='carousel-image'
                        src='../images/Rectangle 7.png'
                        className={insightStyles.contentImage }
                    />
                </div>

                {!isReadMore ? 
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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>
                        <button onClick={() => toggleBtn()}>Show More<AiOutlineArrowRight/></button>
                                               
                </div>
                :  "" } 

                { isReadMore &&
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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

                        <div className = {insightStyles.actionBtns}>
                            <button onClick={() => toggleBtn()}>Share<AiOutlineShareAlt/></button> 
                            <button onClick={() => toggleBtn()}  className={insightStyles.closeBtn}>Show Less<AiOutlineClose  className={insightStyles.closeBtn}/></button>
                        </div>
                                   
                    </div> 

                }           
                
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
                {!isReadMore ? 
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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>
                        <button onClick={() => toggleBtn()}>Show More<AiOutlineArrowRight/></button>
                                               
                </div>
                :  "" } 

                { isReadMore &&
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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

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
                        <p>This is an abstract of a new working paper co-authored with Moses Ogenyi and Sone Osakwe. </p>

                        <div className = {insightStyles.actionBtns}>
                            <button onClick={() => toggleBtn()}>Share<AiOutlineShareAlt/></button> 
                            <button onClick={() => toggleBtn()} className={insightStyles.closeBtn}>Show Less<AiOutlineClose className={insightStyles.closeBtn}/></button>
                        </div>
                                   
                    </div> 

                } 
            </div>
        </section>
    </Layout>
    )
}

export default InsightPage

export const Head = () => <title>EduInsight Page</title>