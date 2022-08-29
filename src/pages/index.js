import * as React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { container,
         sliderSection,
         carousel,
         carouselImage,
         carouselTrackContainer,
         carouselTrack,
         carouselSlide,
         carouselButton,
         carouselButtonLeft,
         carouselButtonRight,
         carouselIndicator,
         boxes,
         col1,
         boxContainer } from '../styling/style.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className={ container }>
          <div className={ sliderSection }>
            <div className={ carousel }>
              <button className="carousel__button carousel__button--left is-hidden">
                <i class='bx bxs-left-arrow-circle icon '></i>
              </button>
            <div className={ carouselTrackContainer }>
              <ul className={ carouselTrack } >
                <li className={ carouselSlide }>
                  <StaticImage 
                        alt='logo'
                        src='../images/Rectangle3.png'
                  />
                </li>
                <li className={ carouselSlide }>
                  <StaticImage 
                        alt='logo'
                        src='../images/Rectangle3.png'
                  />
                </li>
                <li className={ carouselSlide }>
                  <StaticImage 
                        alt='logo'
                        src='../images/Rectangle3.png'
                  />
                </li>
              </ul>
            </div>
            <button className="carousel__button carousel__button--right">
              <i class='bx bxs-right-arrow-circle icon'></i>
            </button>
            <div className="carousel__nav">
              <button className={ carouselIndicator }></button>
              <button className={ carouselIndicator }></button>
              <button className={ carouselIndicator }></button>
            </div>
            </div>
            <div className={ boxes }>
              <div className={ col1 }>
                <h3>Latest Articles</h3>
              <div className={ boxContainer }>
                <h1>Image </h1>
              <div className="color-overlay"></div>  
              <div className="box-content">
                <h5>Impact of Mother Tongue on Education in Nigeria</h5>
                <p>By Jane Doe and Dan Abrov</p>
                <p>August 5, 2022</p>
              </div>  
            </div>
                        
            </div>
              <div className="col2">
                <h3>Incase You Missed it </h3>
              <div className="box-container">
                <h1>Image </h1>
              <div className="color-overlay"></div>  
                <div className="box-content">
                  <h5>On The JAMB No-Zero Policy</h5>
                  <p>By Jane Doe and Dan Abrov</p>
                  <p>August 5, 2022</p>
                </div>  
              </div>
            </div>
            </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
