// import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as dataStyles from '../styling/style.module.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
// apollo client useQuery and gql hooks
import { useQuery, gql } from '@apollo/client'

const GET_EDU_DATA = gql`
query {
    eduDataCollection(limit: 10) {
      items {
        sys {
          id
          publishedAt
        }
        title
        infographics {
          url
        }
      }
    }
  }
`;

const DataPage = () => {
    const { data, loading, error } = useQuery(GET_EDU_DATA);

    if(loading) return 'Loading...';

    return (
        <Layout>
            <section className= { dataStyles.container1 }>
                <div className={dataStyles.carouselContainer}>
                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className={dataStyles.mycarousel}
                        >
                        <SwiperSlide >
                            <StaticImage 
                            alt='carousel-image'
                            src='../images/Rectangle 9.png'
                            className={dataStyles.mycarouselimage }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 9.png'
                                className={dataStyles.mycarouselimage }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <StaticImage 
                                    alt='carousel-image'
                                    src='../images/Rectangle 9.png'
                                    className={dataStyles.mycarouselimage }
                                />
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className= {dataStyles.grid}>
                    <div className= {dataStyles.gridHeader}>
                        <h4>
                        Information Brief (Infographics)
                        </h4>
                    </div> 
                    <div className= {dataStyles.grid3Column }>

                    { data?.eduDataCollection.items.map((item, i) => (
                        <div key={ item?.sys.id } className= {dataStyles.grid3Columnflow}>
                            <img 
                                src={ item?.infographics.url } 
                                className={dataStyles.grid3ColumnflowImage} 
                            />
                        <div className= {dataStyles.grid3ColumnText}>
                            <h4>{ item?.title }</h4>
                            <p>Posted { item?.sys.publishedAt }</p>
                        </div>
                        <div className= {dataStyles.grid3ColumnButton}>
                            <button>Preview</button> 
                            <button>Download</button> 
                        </div>
                        </div>   
                    ))}    

                    </div> 
                </div>
            </section>
        </Layout>
    )
}

export default DataPage

export const Head = () => <title>EduData Page</title>