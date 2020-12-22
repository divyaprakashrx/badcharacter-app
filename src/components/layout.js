import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Link to="/" className="head">
          <h1>Bad Characters</h1>
        </Link>
      </div>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <main>{children}</main>
      </div>
      <div className="footer">&copy; Divya Prakash</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
