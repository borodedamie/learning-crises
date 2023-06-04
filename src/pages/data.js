// import * as React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby";
import * as dataStyles from '../styling/style.module.css'
import React, { useState } from "react";
import Modal from 'react-modal'
import '../../src/styling/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { Navigation } from "swiper";
import Seo from "../components/seo";
// jsPDF
import { jsPDF } from 'jspdf'
import { GrClose } from '@react-icons/all-files/gr/GrClose'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const DataPage = ({ data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState({
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
            <section>
                {!modalIsOpen && <div className={dataStyles.carouselContainer}>
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
                        id='data-swiper'
                    // className={dataStyles.mycarousel}
                    >
                        {data?.allContentfulEduData.nodes.slice(0, 3).map((node, i) => (
                            <SwiperSlide key={node?.id}>
                                <div>
                                    <GatsbyImage
                                        alt='carousel'
                                        image={getImage(node?.infographics)}
                                        className={dataStyles.mycarouselimage}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>}
                <div className={dataStyles.grid}>
                    <div className={dataStyles.gridHeader}>
                        <h4>
                            Information Brief (Infographics)
                        </h4>
                    </div>
                    <div className={dataStyles.grid3Column}>
                        {data?.allContentfulEduData.nodes.map((node, i) => (
                            <div key={node?.id} className={dataStyles.grid3Columnflow}>
                                <div className={dataStyles.grid3ColumnflowImg}>
                                    <GatsbyImage
                                        alt="infographics"
                                        image={getImage(node?.infographics)}
                                        className={dataStyles.grid3ColumnflowImagee}
                                    />
                                </div>

                                <div className={dataStyles.gridColumnText}>
                                    <h4>{node?.title}</h4>
                                    <p>Posted {node?.date}</p>
                                </div>
                                <div className={dataStyles.grid3ColumnButton}>
                                    <button onClick={() => {
                                        setModalIsOpen(true)
                                        setModalData({
                                            title: node.title,
                                            image: node.infographics
                                        })
                                    }}>Preview</button>
                                    <button onClick={() => imgToPdf(node.title, node.infographics.url)}>Download</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        ariaHideApp={false}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={{
                            overlay: {
                                backgroundColor: 'grey'
                            },
                            content: {
                                position: 'absolute',
                                left: '80px',
                                right: '80px',
                            }
                        }}
                        className={dataStyles.showSmallerModal}
                    >
                        <div className={dataStyles.ModalContent} >
                            <div className={dataStyles.content1Close} >
                                <button onClick={() => setModalIsOpen(false)} ><GrClose /></button>
                            </div>
                            <h4>{modalData.title}</h4>
                            <div className={dataStyles.ModalContentImg}>
                                <GatsbyImage
                                    alt="infographics"
                                    image={getImage(modalData.image)}
                                    className={dataStyles.ModalContentImage}
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
            gatsbyImageData(formats: WEBP)
          }
          title
          date
        }
      }
  }
`;

export default DataPage

export const Head = () => <Seo title="EduData Page" />