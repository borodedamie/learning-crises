import * as React from 'react'
import Layout from "../components/layout/layout"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as aboutStyles from '../styling/style.module.css'
// Serve images from filesystem
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'
// apollo client
import { useQuery, gql } from '@apollo/client'

const GET_ABOUT_PAGE_DATA = gql`
query {
    about(id: "1zV0qCZiYNBQTCIg1K1Vo9") {
      learningRises
      teamCollection {
        items {
          sys {
            id
          }
          name
          position
          avatar {
            url
          }
          facebook
          twitter
          gmail
          bio
        }
      }
    }
  }
`;

const AboutPage = () => {
    const { data, loading, error } = useQuery(GET_ABOUT_PAGE_DATA);
    if(loading) return 'Loading...'

    return(
        <Layout>
            <section className= {aboutStyles.container1} >
                <div className= {aboutStyles.aboutDetails}>
                    <div className= {aboutStyles.aboutDetailsHeader}>
                        <h3>About Learning Rises</h3>
                    </div>
                    <div className= {aboutStyles.aboutDetailsBody}>
                        <p>{ data?.about.learningRises }</p>
                    </div>   
                </div>
                <div className= {aboutStyles.aboutTeam}>
                    <div className= {aboutStyles.aboutTeamHeader}>
                        <h3>Meet The Team</h3>
                    </div>
                    <div className= {aboutStyles.aboutTeamBody}>
                        { data?.about.teamCollection.items.map((item, i) => (
                            <div key={ item?.sys.id } className= {aboutStyles.grid2Columnflow}>
                                <img 
                                    src={ item?.avatar.url }
                                    className={ aboutStyles.grid2ColumnflowImage }
                                />
                                <div className= {aboutStyles.grid2ColumnText}>
                                    <h4>{ item?.name }</h4>
                                    <h6>{ item?.position }</h6>
                                    <div className={aboutStyles.aboutIcon }>
                                        <Link to=""><FaFacebookF /></Link>
                                        <Link to=""><FaTwitter /></Link>
                                        <Link to=""><SiGmail /></Link>
                                    </div>
                                    <p>{ item?.bio }</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage
export const Head = () => <title>About Page</title>