import * as React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import * as indexStyles from '../styling/style.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <section className={ indexStyles.container }>
        <div>
              <div>
                <StaticImage 
                  alt='carousel-image'
                  src='../images/Rectangle3.png'
                />
              </div>
            </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
