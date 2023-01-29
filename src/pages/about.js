import * as React from 'react'
import Layout from "../components/layout/layout"
import { Link , graphql } from 'gatsby'
import * as aboutStyles from '../styling/style.module.css'
// Serve images from filesystem
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutPage = ({ data }) => {
    return(
        <Layout>
            <section>
                <div className= {aboutStyles.aboutDetails}>
                    <div className= {aboutStyles.aboutDetailsHeader}>
                        <h3>About Learning Rises</h3>
                    </div>
                    <div className= {aboutStyles.aboutDetailsBody}>
                        <p>{ data?.contentfulAbout.learningRises.learningRises }</p>
                    </div>   
                </div>
                <div className= {aboutStyles.aboutTeam}>
                    <div className= {aboutStyles.aboutTeamHeader}>
                        <h3>Meet The Team</h3>
                    </div>
                    <div>
                        { data?.contentfulAbout.team.map((item, i) => (
                            <div key={ item?.id } className= {aboutStyles.grid2Columnflow}>
                                <div className= {aboutStyles.grid2ColumnflowImg}>
                                    <GatsbyImage 
                                        alt="profile"
                                        image={ getImage(item?.avatar) }
                                        className={ aboutStyles.grid2ColumnflowImage }
                                    />
                                </div>
                               
                                <div className= {aboutStyles.grid2ColumnText}>
                                    <h4>{ item?.name }</h4>
                                    <h6>{ item?.position }</h6>
                                    <div className={aboutStyles.aboutIcon }>
                                        <Link to=""><FaFacebookF /></Link>
                                        <Link to=""><FaTwitter /></Link>
                                        <Link to=""><SiGmail /></Link>
                                    </div>
                                    <p>{ item?.bio.bio }</p>
                                </div>
                            </div>
                        ))}
                    </div>                   
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query AboutPage {
    contentfulAbout(contentful_id: {eq: "1zV0qCZiYNBQTCIg1K1Vo9"}) {
      learningRises {
        learningRises
      }
      team {
        name
        position
        avatar {
            gatsbyImageData(formats: WEBP)
        }
        facebook
        twitter
        gmail
        bio {
          bio
        }
        id
      }
    }
  }
`;

export default AboutPage
export const Head = () => <Seo title="About Page" />