import * as React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby";
// import { StaticImage } from 'gatsby-plugin-image'
import * as supportStyles from '../styling/style.module.css'
import { convertDate } from "../utils/convertDate";
import Seo from "../components/seo";

const SupportPage = ({ data }) => {
    return(
        <Layout>
            <section className= {supportStyles.container1}>
            <div className= {supportStyles.grid}>
            <h2>Sort List</h2>
                    <div className= {supportStyles.selectButton}>
                        <button>All</button> 
                        <button >Videos</button>
                        <button>Texts Only</button>
                    </div>
                    <div className= {supportStyles.grid3Column }>
                    { data?.allContentfulEduSupport.nodes.map((node, i) => (
                        <div key={ node?.id } className= {supportStyles.grid3Columnflow}>
                          <div className= {supportStyles.grid3ColumnflowImg}>
                          <img 
                           src={ node?.image.url } 
                           className={supportStyles.grid3ColumnflowImage}
                           />
                          </div> 
                                <div className= {supportStyles.grid3ColumnText}>
                                    <h4>{ node?.title }</h4>
                                    <h6>Category: Texts </h6>
                                    <p>Posted { convertDate(node?.createdAt) }</p>
                                </div>
                                <div className= {supportStyles.grid3ColumnButton}>
                                    <button><Link to={`/supports/${node.id}`}>View</Link></button>
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
query EduSupport {
  allContentfulEduSupport(limit: 10) {
    nodes {
      contentful_id
      id
      createdAt
      title
      image {
        url
      }
    }
  }
}
`;

export default SupportPage

export const Head = () => <Seo title="EduSupport Page" />