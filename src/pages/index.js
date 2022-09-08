import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as indexStyles from '../styling/style.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { useQuery, gql } from '@apollo/client'

const GET_ALL_EDU_INSIGHTS = gql`
query {
    eduInsightCollection(limit: 10) {
      items {
        sys {
          id
          publishedAt
        }
        title
        author
        coverImage {
           url
        }
        introduction
        article {
          json
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_EDU_INSIGHTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data)
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
                <div className={ indexStyles.asideHeader}>
                    <h4>
                    Latest Article
                    </h4>
                </div>
                <div className={ indexStyles.asideBox }>
                   <StaticImage
                      src='../images/Rectangle 4 (1).png'
                      className={indexStyles.asideImage}
                      alt="index-page-image"
                    /> 
                    <div className={indexStyles.overlay}>
                      <div className={ indexStyles.asideText}>
                        <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                        <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                        <p className={ indexStyles.date }> August 5, 2022</p>
                      </div>
                    </div>  
                </div>
                <div className={ indexStyles.asideHeader}>
                    <h4>
                    Incase You Missed It
                    </h4>
                </div>                    
                <div className={ indexStyles.asideBox }>
                   <StaticImage
                      src='../images/Rectangle 8 (1).png'
                      className={indexStyles.asideImage}
                      alt="index-page-image2"
                    /> 
                    <div className={indexStyles.overlay}>
                      <div className={ indexStyles.asideText}>
                        <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                        <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                        <p className={ indexStyles.date }> August 5, 2022</p>
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
                    navigation
                    loop= {"true"}
                    // navigation={true}
                    modules={[Pagination , Navigation]}                    
                    className={indexStyles.mySwiper}                  
                >
            { data?.eduInsightCollection.items.map((item, i) => (
              <SwiperSlide key={ item?.sys.id }>
                <div className={ indexStyles.swiperFlex}>
                  <div className={ indexStyles.swiperFlexImage }  >
                    <img 
                      alt='carousel-image'
                      src={ item?.coverImage.url }
                      className={indexStyles.swiperImagee }
                    />
                  </div>
                  <div className={ indexStyles.swiperText }  >
                    <h4>{ item?.title }</h4>
                    <p className={ indexStyles.author }> By { item?.author }</p>
                    <p className={ indexStyles.date }>{ item?.sys.publishedAt }</p>
                    <button><Link>Read More</Link></button>                             
                  </div>
                </div>                    
              </SwiperSlide>
              ))
            }
            </Swiper>
              <div className={indexStyles.navigationBtns }>
                <StaticImage
                  alt='carousel-arrow'
                  src='../images/Vector.png'
                  className={indexStyles.swiperArrow }
                />

                <StaticImage
                  alt='carousel-arrow'
                  src='../images/Vector (1).png'
                  className={indexStyles.swiperArrow }
                />
              </div>
            </div>

              <div className={ indexStyles.box }  >
                <h3>EduData</h3>
                <Swiper                 
                    navigation={true}
                    modules={[Pagination , Navigation]}                    
                    className={indexStyles.mySwiper}              
                    >
                      <SwiperSlide >
                        <div className={ indexStyles.swiperFlex}>
                            <div className={ indexStyles.swiperFlexImage }  >
                              <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 4 (1).png'
                                className={indexStyles.swiperImagee }
                              />
                            </div>
                            <div className={ indexStyles.swiperText }  >
                              <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                              <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                              <p className={ indexStyles.date }> August 5, 2022</p>
                              <button><Link>Read More</Link></button>                             
                            </div>
                        </div>            
                      </SwiperSlide>

                      <SwiperSlide >
                        <div className={ indexStyles.swiperFlex}>
                            <div className={ indexStyles.swiperFlexImage }  >
                              <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 4 (1).png'
                                className={indexStyles.swiperImagee }
                              />
                            </div>

                            <div className={ indexStyles.swiperText }  >
                              <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                              <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                              <p className={ indexStyles.date }> August 5, 2022</p>
                              <button><Link>Read More</Link></button>                             
                            </div>
                        </div>    
                      </SwiperSlide>

                      <SwiperSlide >
                        <div className={ indexStyles.swiperFlex}>
                            <div className={ indexStyles.swiperFlexImage }  >
                              <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 4 (1).png'
                                className={indexStyles.swiperImagee }
                              />
                            </div>

                            <div className={ indexStyles.swiperText }  >
                              <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                              <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                              <p className={ indexStyles.date }> August 5, 2022</p>
                              <button><Link>Read More</Link></button>                             
                            </div>
                        </div>              
                      </SwiperSlide>
                      
                      
                  </Swiper>

                  <div className={indexStyles.navigationBtns }>
                    <StaticImage
                      alt='carousel-arrow'
                      src='../images/Vector.png'
                      className={indexStyles.swiperArrow }
                    />

                    <StaticImage
                      alt='carousel-arrow'
                      src='../images/Vector (1).png'
                      className={indexStyles.swiperArrow }
                    />
                  </div>

              </div>


              <div className={ indexStyles.box }  >
                <h3>EduSupport</h3>
                <Swiper
                    
                    navigation={true}
                    modules={[Pagination , Navigation]}                    
                    className={indexStyles.mySwiper}
                     
                    >
                      <SwiperSlide >
                        <div className={ indexStyles.swiperFlex}>
                            <div className={ indexStyles.swiperFlexImage }  >
                              <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 4 (1).png'
                                className={indexStyles.swiperImagee }
                              />
                            </div>

                            <div className={ indexStyles.swiperText }  >
                              <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                              <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                              <p className={ indexStyles.date }> August 5, 2022</p>
                              <button><Link>Read More</Link></button>                             
                            </div>
                        </div>

                         
                          
                      </SwiperSlide>

                      <SwiperSlide >
                        <div className={ indexStyles.swiperFlex}>
                            <div className={ indexStyles.swiperFlexImage }  >
                              <StaticImage 
                                alt='carousel-image'
                                src='../images/Rectangle 4 (1).png'
                                className={indexStyles.swiperImagee }
                              />
                            </div>

                            <div className={ indexStyles.swiperText }  >
                              <h4>Impact of Mother Tongue onEducation in Nigeria</h4>
                              <p className={ indexStyles.author }> By Jane Doe and Dan Abrov</p>
                              <p className={ indexStyles.date }> August 5, 2022</p>
                              <button><Link>Read More</Link></button>                             
                            </div>
                        </div>

                         
                          
                      </SwiperSlide>
                      
                      
                  </Swiper>
                  <div className={indexStyles.navigationBtns }>
                    <StaticImage
                      alt='carousel-arrow'
                      src='../images/Vector.png'
                      className={indexStyles.swiperArrow }
                    />

                    <StaticImage
                      alt='carousel-arrow'
                      src='../images/Vector (1).png'
                      className={indexStyles.swiperArrow }
                    />
                  </div>

              </div>
          </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
