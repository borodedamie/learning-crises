import * as React from "react"
import Layout from "../components/layout/layout"
import {RiArrowRightCircleFill} from "@react-icons/all-files/ri/RiArrowRightCircleFill";
import {RiArrowLeftCircleFill} from "@react-icons/all-files/ri/RiArrowLeftCircleFill";
import { Link, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as indexStyles from '../styling/style.module.css'
import '../../src/styling/style.css'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
// import { useSwiper } from 'swiper/react';
import { convertDate } from "../utils/convertDate";
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const swiper = useSwiper();
  console.log(swiper)
  return (
    <Layout>
      <section className={ indexStyles.container }>    
              <div className={indexStyles.sliderContainer}>
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination , Navigation]} 
                    className={indexStyles.mySwiper}
                    navigation
                    id='main-swiper'
                    >
                      
                      <SwiperSlide >
                          <StaticImage 
                          alt='carousel-image'
                          src='../images/Rectangle 3.png'
                          className={indexStyles.swiperImage }
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <StaticImage 
                            alt='carousel-image'
                            src='../images/Rectangle 3.png'
                            className={indexStyles.swiperImage }
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 3.png'
                                className={indexStyles.swiperImage }
                              />
                      </SwiperSlide>               
                  </Swiper>
                  
              </div>    
              <div className={ indexStyles.aside }>
                <div className= {indexStyles.asideCol}>
                  <div className={ indexStyles.asideHeader}>
                      <h4>
                      Latest Article
                      </h4>
                  </div>
                  <div className={ indexStyles.asideBox }>
                    <img
                        src={ data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 1 ].coverImage.url }
                        className={indexStyles.asideImage}
                        alt="index-page-image"
                      /> 
                      <div className={indexStyles.overlay}>
                        <div className={ indexStyles.asideText}>
                          <h4>{ data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 1 ].title }</h4>
                          <p className={ indexStyles.author }>By { data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 1 ].author }</p>
                          <p className={ indexStyles.date }>{ convertDate(data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 1 ].createdAt) }</p>
                        </div>
                      </div>  
                  </div>
                </div>
               <div className= {indexStyles.asidecol}>
                  <div className={ indexStyles.asideHeader}>
                      <h4>
                      Incase You Missed It
                      </h4>
                  </div>                    
                  <div className={ indexStyles.asideBox }>
                    <img
                        src={  data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 2 ].coverImage.url }
                        className={indexStyles.asideImage}
                        alt="index-page-image2"
                      /> 
                      <div className={indexStyles.overlay}>
                        <div className={ indexStyles.asideText}>
                          <h4>{ data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 2 ].title }</h4>
                          <p className={ indexStyles.author }> By { data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 2 ].author }</p>
                          <p className={ indexStyles.date }>{ convertDate(data.allContentfulEduInsight.nodes[ data.allContentfulEduInsight.nodes.length - 2 ].createdAt) }</p>
                        </div>
                      </div>  
                  </div>
                </div>
              </div>
      </section>
      <section className={ indexStyles.about }>
            <div className={ indexStyles.aboutBtn }>
              <button>About the Blog</button>
            </div>
            <div className={ indexStyles.aboutCon }>
              <div className={ indexStyles.aboutCon1 }>
                  <h3>BRIEF</h3>
                  <p>This blog discusses ideas that can address learning crises and
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
              <div className={ indexStyles.aboutCon2 }>
                <h3>APPROACH</h3>
                <ul>
                  <li><span>R</span>-esearch and Data Analytics to conceptualize the learninf crisis</li>
                  <li><span>I</span>-nnovative technology and diagnostic tools for understanding the learning crisis</li>
                  <li><span>S</span>-upport and capacity development for education workforce</li>
                  <li><span>E</span>-ducation partnership for action</li>
                  <li><span>S</span>-ystems for the future</li>
                </ul>
              </div>
            </div>
      </section>

      <section className={ indexStyles.boxSection }>
          <div className={ indexStyles.boxCon }  >
            <div className={ indexStyles.box }  >
                <h3>EduInsight</h3>
                <Swiper                 
                    loop= {"true"}
                    navigation
                    modules={[Pagination , Navigation]}                    
                    className={indexStyles.mySwiper}
                    id='box-swiper'                  
                >
            { data?.allContentfulEduInsight.nodes.map((node, i) => (
              <SwiperSlide key={ node?.id }>
                <div className={ indexStyles.swiperFlex}>
                  <div className={ indexStyles.swiperFlexImage }  >
                    <img 
                      alt='carousel-image'
                      src={ node?.coverImage.url }
                      className={indexStyles.swiperImagee }
                      
                    />
                  </div>
                  <div className={ indexStyles.swiperText }  >
                    <h4>{ node?.title }</h4>
                    <p className={ indexStyles.author }> By { node?.author }</p>
                    <p className={ indexStyles.date }>{ convertDate(node?.createdAt) }</p>
                    <button  style={{marginTop : "34px"}}><Link>Read More</Link></button>                             
                  </div>
                </div>                    
              </SwiperSlide>
              ))
            }
            </Swiper>
            
              {/* <div className={indexStyles.navigationBtns }>
               <RiArrowLeftCircleFill className={indexStyles.swiperArrow }/>
               <RiArrowRightCircleFill className={indexStyles.swiperArrow }/>
                
              </div> */}
            </div>
              <div className={ indexStyles.box }  >
                <h3>EduData</h3>
                <Swiper                 
                    navigation
                    modules={[Pagination , Navigation]}                    
                    className={indexStyles.mySwiper}  
                    id='box-swiper'              
                    >
                    { data?.allContentfulEduData.nodes.map((node, i) => (
                      <SwiperSlide key={ node?.id }>
                      <div className={ indexStyles.swiperFlex}>
                          <div className={ indexStyles.swiperFlexImage }  >
                            <img 
                              alt='carousel-image'
                              src={ node?.infographics.url }
                              className={indexStyles.swiperImagee }
                            />
                          </div>
                          <div className={ indexStyles.swiperText }  >
                            <h4>{ node?.title }</h4>
                            <p className={ indexStyles.date }>{ convertDate(node?.createdAt) }</p>
                            <button className= {indexStyles.buttons}  style={{marginTop : "40px"}}><Link>Read More</Link></button>                             
                          </div>
                      </div>            
                    </SwiperSlide> 
                    ))}                                     
                  </Swiper>
                  
              </div>
              <div className={ indexStyles.box }  >
                <h3>EduSupport</h3>
                <Swiper                 
                    navigation
                    modules={[Pagination , Navigation]}                    
                    className={indexStyles.mySwiper}   
                    id='box-swiper'        
                    >
                    { data?.allContentfulEduSupport.nodes.map((node, i) => (
                      <SwiperSlide key={ node?.id }>
                        <div className={ indexStyles.swiperFlex}>
                            <div className={ indexStyles.swiperFlexImage }  >
                              <img 
                                alt='carousel-image'
                                src={ node?.image.url }
                                className={indexStyles.swiperImagee }
                              />
                            </div>

                            <div className={ indexStyles.swiperText }  >
                              <h4>{ node?.title }</h4>
                              <p className={ indexStyles.author }></p>
                              <p className={ indexStyles.date }>{ convertDate(node?.createdAt) }</p>
                              <button className= {indexStyles.buttons}  style={{marginTop : "40px"}}><Link>Read More</Link></button>                             
                            </div>
                        </div>                         
                      </SwiperSlide> 
                    ))}                     
                  </Swiper>

                    


                 


                  
              </div>
          </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query EduInsightsDataSupport {
  allContentfulEduInsight(limit: 3) {
    nodes {
      id
      createdAt
      title
      author
      coverImage {
        url
      }
    }
  }
  allContentfulEduData(limit: 3) {
    nodes {
      id
      createdAt
      title
      infographics {
        url
      }
    }
  }
  allContentfulEduSupport(limit: 3) {
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

export default IndexPage

export const Head = () => <Seo title="Home Page" />
