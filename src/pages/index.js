// import * as React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import * as indexStyles from '../styling/style.module.css'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const IndexPage = () => {
  return (
    <Layout>
      <section className={ indexStyles.container }>
        
              <div className={indexStyles.sliderContainer}>
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className={indexStyles.mySwiper}
                    >
                      <SwiperSlide >
                          <StaticImage 
                          alt='carousel-image'
                          src='../images/sliderImg.png'
                          className={indexStyles.swiperImage }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <StaticImage 
                            alt='carousel-image'
                            src='../images/sliderImg.png'
                            className={indexStyles.swiperImage }
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <StaticImage 
                                alt='carousel-image'
                                src='../images/sliderImg.png'
                                className={indexStyles.swiperImage }
                              />
                      </SwiperSlide>
                      
                  </Swiper>
              </div>

              <div className="aside">
                <h1>This is Aside</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum animi debitis quod qui vel nemo veniam explicabo accusamus, suscipit inventore. A doloremque voluptatum dolore incidunt, facilis quas eligendi expedita, cum rem perspiciatis quibusdam ipsum unde, ad provident error deserunt? Tenetur inventore eligendi eaque optio exercitationem distinctio saepe, quo minima.</p>
              </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
