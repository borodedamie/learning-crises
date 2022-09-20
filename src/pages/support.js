import React, { useState } from 'react';
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby";
// import { StaticImage } from 'gatsby-plugin-image'
import * as supportStyles from '../styling/style.module.css'
import { convertDate } from "../utils/convertDate";
import Seo from "../components/seo";

const SupportPage = ({ data }) => {
const [ category, setCategory ] = useState('')

    return(
        <Layout>
            <section className= {supportStyles.container1}>
            <div className= {supportStyles.grid}>
            <h2>Sort List</h2>
                    <div className= {supportStyles.selectButton}>
                        <button onClick={ () => setCategory('All') }>All</button> 
                        { data?.allContentfulCategory.nodes.map((node, i) => (
                          <button key={ node?.id } onClick={ () => setCategory(node?.name) }>{ node?.name }</button>
                        ))}
                    </div>
                    <div className= {supportStyles.grid3Column }>
                    { data?.allContentfulEduSupport.nodes.filter((node) => {
                      if(category === '' || category === 'All') {
                        return node
                      } else if( node?.category[0].name.toLowerCase().includes(category.toLowerCase())) {
                        return node
                      } return false
                    }).map((node, i) => (
                        <div key={ node?.id } className= {supportStyles.grid3Columnflow}>
                          <div className= {supportStyles.grid3ColumnflowImg}>
                          <img 
                           src={ node?.image.url } 
                           className={supportStyles.grid3ColumnflowImage}
                           />
                          </div> 
                                <div className= {supportStyles.grid3ColumnText}>
                                    <h4>{ node?.title }</h4>
                                    <h6>Category: { node?.category[0].name } </h6>
                                    <p>Posted { convertDate(node?.createdAt) }</p>
                                </div>
                                <div className= {supportStyles.grid3ColumnButton}>
                                <Link to={`/supports/${node.id}`}> <button>View</button></Link>
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
      category {
        name
      }
      contentful_id
      id
      createdAt
      title
      image {
        url
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
  allContentfulCategory(limit: 10) {
    nodes {
      name
    }
  }
}

`;

export default SupportPage

export const Head = () => <Seo title="EduSupport Page" />