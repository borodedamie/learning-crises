import * as React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql, navigate } from "gatsby";
import * as indexStyles from '../styling/style.module.css'
import '../../src/styling/style.css'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { Pagination } from "swiper";
import { Navigation, Autoplay } from "swiper";
import { convertDate } from "../utils/convertDate";
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const swiper = useSwiper();

  return (
    <Layout>
      <section className={indexStyles.container}>
        <div className={indexStyles.sliderContainer}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 30000,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            navigation
            id='main-swiper'
          >
            {data?.contentfulFrontpageCarousel.images.map((image, i) => (
              <div>
                <SwiperSlide key={image?.id} >
                  <div>
                    <GatsbyImage
                      alt='carousel'
                      image={getImage(image)}
                      className={indexStyles.swiperImage}
                    />
                  </div>
                </SwiperSlide>
              </div>
            ))
            }
          </Swiper>

        </div>
        <div className={indexStyles.aside}>
          <div>
            <div className={indexStyles.asideHeader}>
              <h4>
                Latest Article
              </h4>
            </div>
            <div className={indexStyles.asideBox}
              onClick={() => navigate(`/insights/${data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 1].id}`)}>
              <div>
                <GatsbyImage
                  image={getImage(data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 1].coverImage)}
                  className={indexStyles.asideImage}
                  alt="index-page"
                />
              </div>
              <div className={indexStyles.overlay}>
                <div className={indexStyles.asideText}>
                  <h4>{data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 1].title}</h4>
                  <p className={indexStyles.author}>By {data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 1].author}</p>
                  <p className={indexStyles.date}>{data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 1].date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={indexStyles.asidecol}>
            <div className={indexStyles.asideHeader}>
              <h4>
                Incase You Missed It
              </h4>
            </div>
            <div className={indexStyles.asideBox}
              onClick={() => navigate(`/insights/${data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 2].id}`)}>
              <div>
                <GatsbyImage
                  image={getImage(data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 2].coverImage)}
                  className={indexStyles.asideImage}
                  alt="index-page"
                />
              </div>
              <div className={indexStyles.overlay}>
                <div className={indexStyles.asideText}>
                  <h4>{data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 2].title}</h4>
                  <p className={indexStyles.author}> By {data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 2].author}</p>
                  <p className={indexStyles.date}>{data.allContentfulEduInsight.nodes[data.allContentfulEduInsight.nodes.length - 2].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={indexStyles.about}>
        <div className={indexStyles.aboutBtn}>
          <button>About the Blog</button>
        </div>
        <div className={indexStyles.aboutCon}>
          <div className={indexStyles.aboutCon1}>
            <h3>BRIEF</h3>
            <p>{data?.contentfulBrief.writeUp.writeUp}</p>
          </div>
          <div className={indexStyles.aboutCon2}>
            <h3>APPROACH</h3>
            <ul>
              <li><span>R</span>-esearch and Data Analytics to conceptualize the learning crisis</li>
              <li><span>I</span>-nnovative technology and diagnostic tools for understanding the learning crisis</li>
              <li><span>S</span>-upport and capacity development for education workforce</li>
              <li><span>E</span>-ducation partnership for action</li>
              <li><span>S</span>-ystems for the future</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={indexStyles.boxSection}>
        <div className={indexStyles.boxCon}  >
          <div className={indexStyles.box}  >
            <h3>EduInsight</h3>
            <Swiper
              loop={"true"}
              navigation
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 30000,
                disableOnInteraction: true,
              }}
              className={indexStyles.mySwiper}
              id='box-swiper'
            >
              {data?.allContentfulEduInsight.nodes.map((node, i) => (
                <SwiperSlide key={node?.id}>
                  <div className={indexStyles.swiperFlex}>
                    <div >
                      <GatsbyImage
                        alt='carousel'
                        image={getImage(node?.coverImage)}
                        className={indexStyles.swiperImagee}
                      />
                    </div>
                    <div className={indexStyles.swiperText}  >
                      <h4>{node?.title}</h4>
                      <p className={indexStyles.author}> By {node?.author}</p>
                      <p className={indexStyles.date}>{node?.date}</p>
                      <button style={{ marginTop: "34px" }}><Link to={`/insights/${node.id}`}>Read More</Link></button>
                    </div>
                  </div>
                </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
          <div className={indexStyles.box}  >
            <h3>EduData</h3>
            <Swiper
              navigation
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 30000,
                disableOnInteraction: true,
              }}
              className={indexStyles.mySwiper}
              id='box-swiper'
            >
              {data?.allContentfulEduData.nodes.map((node, i) => (
                <SwiperSlide key={node?.id}>
                  <div className={indexStyles.swiperFlex}>
                    <div >
                      <GatsbyImage
                        alt='carousel'
                        image={getImage(node?.infographics)}
                        className={indexStyles.swiperImagee}
                      />
                    </div>
                    <div className={indexStyles.swiperText}  >
                      <h4>{node?.title}</h4>
                      <p className={indexStyles.date}>{node?.date}</p>
                      <button style={{ marginTop: "40px" }}><Link to={`/datas/${node.id}`}>Read More</Link></button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
          <div className={indexStyles.box}  >
            <h3>EduSupport</h3>
            <Swiper
              navigation
              modules={[Pagination, Navigation, Autoplay]}
              className={indexStyles.mySwiper}
              autoplay={{
                delay: 30000,
                disableOnInteraction: true,
              }}
              id='box-swiper'
            >
              {data?.allContentfulEduSupport.nodes.map((node, i) => (
                <SwiperSlide key={node?.id}>
                  <div className={indexStyles.swiperFlex}>
                    <div className={indexStyles.swiperFlexImage}  >
                      <GatsbyImage
                        alt='carousel'
                        image={getImage(node?.image)}
                        className={indexStyles.swiperImagee}
                      />
                    </div>

                    <div className={indexStyles.swiperText}  >
                      <h4>{node?.title}</h4>
                      <p className={indexStyles.author}></p>
                      <p className={indexStyles.date}>{node?.date}</p>
                      <button style={{ marginTop: "40px" }}><Link to={`/supports/${node.id}`}>Read More</Link></button>
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
  contentfulFrontpageCarousel(id: {eq: "4d013eb2-a5e9-5cc5-a306-1d692bc76cbe"}) {
    images {
      id
      url
      gatsbyImageData(formats: WEBP)
    }
  }
  allContentfulEduInsight(limit: 3) {
    nodes {
      id
      createdAt
      title
      author
      coverImage {
        gatsbyImageData(formats: WEBP)
      }
      date
    }
  }
  allContentfulEduData(limit: 3) {
    nodes {
      id
      createdAt
      title
      date
      infographics {
        gatsbyImageData(formats: WEBP)
      }
    }
  }
  allContentfulEduSupport(limit: 3) {
    nodes {
      id
      createdAt
      title
      image {
        gatsbyImageData(formats: WEBP)
      }
      date
    }
  }
  contentfulBrief(writeUp: {id: {eq: "73b0a54d-1c3c-50a8-aef7-0948a430d391"}}) {
    writeUp {
      writeUp
    }
  }
}
`;

export default IndexPage

export const Head = () => <Seo title="Home Page" />
