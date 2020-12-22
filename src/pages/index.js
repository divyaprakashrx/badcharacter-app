import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sheet from "../components/sheet"

function IndexPage () {


  return (
    <Layout>
      <SEO title="Home" />
      <Sheet/>
    </Layout>
  )
}


export default IndexPage
