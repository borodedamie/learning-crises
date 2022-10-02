// import * as React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import * as dataStyles from '../styling/style.module.css'
import React, { useRef, useState } from "react";
import Modal from 'react-modal'
import '../../src/styling/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
// apollo client useQuery and gql hooks
import { convertDate } from "../utils/convertDate";
import Seo from "../components/seo";
// jsPDF
import { jsPDF } from 'jspdf'
import {AiOutlineCloseCircle} from '@react-icons/all-files/ai/AiOutlineCloseCircle'
import { GrClose } from '@react-icons/all-files/gr/GrClose'

const DataPage = ({ data }) => {
const [modalIsOpen, setModalIsOpen] = useState(false)  
const [ modalData, setModalData ] = useState({
    title: '',
    image: ''
}) 
// convert img to PDF
const imgToPdf = (title, url) => {
    const doc = new jsPDF('p', 'px', 'letter');

    const image = new Image();
    image.src = url

    doc.text(`${title}`, 90, 30)
    doc.addImage(image, 'PNG', 55, 50, 340, 250)
    doc.save(`${title}.pdf`)
}

    return (
        <Layout>
            <section className= { dataStyles.container1 }>
            { !modalIsOpen && <div className={dataStyles.carouselContainer}>
                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination , Navigation]} 
                        navigation
                        className={dataStyles.mySwiper}
                        id='data-swiper'
                        // className={dataStyles.mycarousel}
                        >
                        { data?.allContentfulEduData.nodes.slice(0, 3).map((node, i) => (
                            <SwiperSlide key={ node?.id }>
                                <img
                                    alt='carousel-image'
                                    src={ node?.infographics.url }
                                    className={dataStyles.mycarouselimage }
                                />
                            </SwiperSlide> 
                        ))}                       
                    </Swiper>
            </div> }
                <div className= {dataStyles.grid}>
                    <div className= {dataStyles.gridHeader}>
                        <h4>
                        Information Brief (Infographics)
                        </h4>
                    </div> 
                    <div className= {dataStyles.grid3Column }>
                    { data?.allContentfulEduData.nodes.map((node, i) => (
                        <div key={ node?.id } className= {dataStyles.grid3Columnflow}>
                            <div className= {dataStyles.grid3ColumnflowImg}>
                                <img 
                                    src={ node?.infographics.url } 
                                    className={dataStyles.grid3ColumnflowImage} 
                                />
                            </div>
                            
                        <div className= {dataStyles.grid3ColumnText}>
                            <h4>{ node?.title }</h4>
                            <p>Posted { convertDate( node?.createdAt) }</p>
                        </div>
                        <div className= {dataStyles.grid3ColumnButton}>
                            <button onClick={ () => {
                                setModalIsOpen(true)
                                setModalData({
                                    title: node.title,
                                    image: node.infographics.url
                                })
                            }}>Preview</button> 
                            <button onClick={ () => imgToPdf(node.title, node.infographics.url) }>Download</button> 
                        </div>
                        </div>   
                    ))}    
                    </div> 
                </div>
            <div>
            <Modal 
                isOpen = {modalIsOpen} 
                ariaHideApp={false}
                onRequestClose = {() => setModalIsOpen(false)} 
                style={{
                    overlay: {
                    backgroundColor: 'grey'
                    },
                    content: {
                    position: 'absolute',
                    left: '80px',
                    right: '80px',
                    }}}
                    className= {dataStyles.showSmallerModal}
            >
                <div className= {dataStyles.ModalContent} >
                    <div className={ dataStyles.content1Close } >
                        <button onClick={() => setModalIsOpen(false)} ><GrClose/></button>
                    </div>
                    <h4>{ modalData.title }</h4>
                    <div className= {dataStyles.ModalContentImg}>
                        <img 
                            alt="infographics image"
                            src={ modalData.image }
                            className = {dataStyles.ModalContentImage}
                        />
                    </div>
                </div>
            </Modal> 
            </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query EduData {
    allContentfulEduData(limit: 10) {
      nodes {
        id
        createdAt
        infographics {
          url
        }
        title
      }
    }
  }
`;

export default DataPage

export const Head = () => <Seo title="EduData Page" />