import * as React from 'react'
import Layout from "../components/layout/layout"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as aboutStyles from '../styling/style.module.css'

// Serve images from filesystem
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

const AboutPage = () => {
    return(
        <Layout>
            <section className= {aboutStyles.container1} >
                <div className= {aboutStyles.aboutDetails}>
                    <div className= {aboutStyles.aboutDetailsHeader}>
                        <h3>About Learning Rises</h3>
                    </div>
                    <div className= {aboutStyles.aboutDetailsBody}>
                        <p>
                        This blog discusses ideas that can address learning crises and deliver quality and inclusive education for all. As much as possible, I will try to
                        be pracademic by looking into research, news commentary, policy development and other areas as far as it meets the goals set for the blog
                        —to strike out ‘CRISES’ and make ‘LEARNING RISES’. The focus will be (mostly) on Nigeria and Africa, but nothing restricts us to this space 
                        once it relates to education. The author, Adedeji Adeniran, is a trained economist and educationist, with research interest in
                        development economics, SDGs and public choice economics. This blog discusses ideas that can address learning crises and deliver quality
                        and inclusive education for all. As much as possible, I will try to be pracademic by looking into research, news commentary, policy
                        development and other areas as far as it meets the goals set for the blog —to strike out ‘CRISES’ and make ‘LEARNING RISES’. The focus will
                        be (mostly) on Nigeria and Africa, but nothing restricts us to this space once it relates to education. The author, Adedeji Adeniran, is a
                        trained economist and educationist, with research interest in development economics, SDGs and public choice economics. 
                        This blog discusses ideas that can address learning crises and deliver quality and inclusive education for all. As much as possible, I will try to
                        be pracademic by looking into research, news commentary, policy development and other areas as far as it meets the goals set for the blog
                        —to strike out ‘CRISES’ and make ‘LEARNING RISES’. The focus will be (mostly) on Nigeria and Africa, but nothing restricts us to this space 
                        once it relates to education. The author, Adedeji Adeniran, is a trained economist and educationist, with research interest in
                        development economics, SDGs and public choice economics. This blog discusses ideas that can address learning crises and deliver quality
                        and inclusive education for all. As much as possible, I will try to be pracademic by looking into research, news commentary, policy
                        development and other areas as far as it meets the goals set for the blog —to strike out ‘CRISES’ and make ‘LEARNING RISES’. The focus will
                        be (mostly) on Nigeria and Africa, but nothing restricts us to this space once it relates to education. The author, Adedeji Adeniran, is a
                        trained economist and educationist, with research interest in development economics, SDGs and public choice economics. 
                        </p>
                    </div>
                    
                </div>
                <div className= {aboutStyles.aboutTeam}>
                    <div className= {aboutStyles.aboutTeamHeader}>
                        <h3>Meet The Team</h3>
                    </div>
                    <div className= {aboutStyles.aboutTeamBody}>
                        <div className= {aboutStyles.grid2Columnflow}>
                            <StaticImage
                                src='../images/Rectangle 15.png'
                                className={aboutStyles.grid2ColumnflowImage}
                                alt="about-page-image"
                            /> 
                            <div className= {aboutStyles.grid2ColumnText}>
                                <h4>Adedeji Adeniran</h4>
                                <h6>Head Staff</h6>
                                <div className={aboutStyles.aboutIcon }>
                                    <Link to=""><FaFacebookF /></Link>
                                    <Link to=""><FaTwitter /></Link>
                                    <Link to=""><SiGmail /></Link>
                                </div>
                                <p>
                                This blog discusses ideas that can address learning crises and
                                deliver quality and inclusive education for all. As much as
                                possible, I will try to be pracademic by looking into research,
                                news commentary, policy development and other areas as far
                                as it meets the goals set for the blog—to strike out ‘CRISES’
                                and make ‘LEARNING RISES’. The focus will be (mostly) on
                                Nigeria and Africa, but nothing restricts us to this space once
                                it relates to education. The author, Adedeji Adeniran, is a
                                trained economist and educationist, with research interest in
                                development economics, SDGs and public choice economics. 
                                </p>
                            </div>
                        </div>
                        <div className= {aboutStyles.grid2Columnflow}>
                            <StaticImage
                                src='../images/Rectangle 15.png'
                                className={aboutStyles.grid2ColumnflowImage}
                                alt="about-page-image2"
                            /> 
                            <div className= {aboutStyles.grid2ColumnText}>
                                <h4>Adedeji Adeniran</h4>
                                <p>Head Staff</p>
                                <div className={aboutStyles.aboutIcon }>
                                    <Link to=""><FaFacebookF /></Link>
                                    <Link to=""><FaTwitter /></Link>
                                    <Link to=""><SiGmail /></Link>
                                </div>
                                <p>
                                This blog discusses ideas that can address learning crises and
                                deliver quality and inclusive education for all. As much as
                                possible, I will try to be pracademic by looking into research,
                                news commentary, policy development and other areas as far
                                as it meets the goals set for the blog—to strike out ‘CRISES’
                                and make ‘LEARNING RISES’. The focus will be (mostly) on
                                Nigeria and Africa, but nothing restricts us to this space once
                                it relates to education. The author, Adedeji Adeniran, is a
                                trained economist and educationist, with research interest in
                                development economics, SDGs and public choice economics. 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage
export const Head = () => <title>About Page</title>