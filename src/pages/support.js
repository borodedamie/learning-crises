import * as React from "react"
import Layout from "../components/layout/layout"
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as supportStyles from '../styling/style.module.css'
import { convertDate } from "../utils/convertDate";

const GET_EDU_SUPPORT = graphql`
query EduSupport {
  allContentfulEduSupport(limit: 10) {
    nodes {
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

const SupportPage = () => {
    const data = useStaticQuery(GET_EDU_SUPPORT);

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
                           <img 
                           src={ node?.image.url } 
                           className={supportStyles.grid3ColumnflowImage}
                           /> 
                                <div className= {supportStyles.grid3ColumnText}>
                                    <h4>{ node?.title }</h4>
                                    <h6>Category: Texts </h6>
                                    <p>Posted { convertDate(node?.createdAt) }</p>
                                </div>
                                <div className= {supportStyles.grid3ColumnButton}>
                                    <button>View</button> 
                                </div>
                        </div>
                    ))}    
                       </div>                   
                    </div> 
            </section>
        </Layout>
    )
    
}

export default SupportPage

export const Head = () => <title>EduSupport Page</title>