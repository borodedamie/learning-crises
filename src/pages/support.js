import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as supportStyles from '../styling/style.module.css'
import { useQuery, gql } from '@apollo/client'

const GET_EDU_SUPPORT = gql`
query {
    eduSupportCollection(limit: 10) {
      items {
        sys {
          id
          publishedAt
        }
        title
        image {
          url
        }
      }
    }
  }
`;

const SupportPage = () => {
    const { data, loading, error } = useQuery(GET_EDU_SUPPORT);

    if(loading) return 'Loading...';
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
                    { data?.eduSupportCollection.items.map((item, i) => (
                        <div key={ item?.sys.id } className= {supportStyles.grid3Columnflow}>
                           <img 
                           src={ item?.image.url } 
                           className={supportStyles.grid3ColumnflowImage}
                           /> 
                                <div className= {supportStyles.grid3ColumnText}>
                                    <h4>{ item?.title }</h4>
                                    <h6>Category: Texts </h6>
                                    <p>Posted { item?.sys.publishedAt }</p>
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