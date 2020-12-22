import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Details from "../components/detail"

const SecondPage = ({location}) => {
 if (location.state) {
    return (
      <Layout>
        <SEO title="Details" />
        <Details url={location.state.url} />
      </Layout>
    )
  } else {
    return null
  }
}

export default SecondPage
