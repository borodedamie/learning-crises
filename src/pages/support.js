import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as supportStyles from '../styling/style.module.css'


const SupportPage = () => {
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
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}

                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image2"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image3"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image4"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image5"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image6"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image7"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button>View</button> 
                            </div>
                        </div>
                        <div className= {supportStyles.grid3Columnflow}>
                            <StaticImage
                                src='../images/Rectangle3.png'
                                className={supportStyles.grid3ColumnflowImage}
                                alt="support-page-image8"
                            /> 
                            <div className= {supportStyles.grid3ColumnText}>
                                <h4>First Aid Treatment for a Covid 19 Patient Breakdown</h4>
                                <h6>Category: Texts </h6>
                                <p>Posted August 5, 2022</p>
                            </div>
                            <div className= {supportStyles.grid3ColumnButton}>
                                <button >View</button> 
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </section>
        </Layout>
    )
    
}

export default SupportPage

export const Head = () => <title>EduSupport Page</title>