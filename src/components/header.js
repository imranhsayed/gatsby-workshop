import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

	{/* Links*/}
	<div style={{ display: 'flex', paddingTop: '16px' }}>
		<Link
			style={{
				color: 'white',
				textDecoration: `none`,
				display: 'flex',
				marginRight: '16px'
			}}
			activeClassName="current-page"
			to="/blog">
			Blogs
		</Link>
		<Link
			style={{
				color: 'white',
				textDecoration: `none`,
				display: 'flex'
			}}
			activeClassName="current-page"
			to="/about">
			About
		</Link>
	</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
