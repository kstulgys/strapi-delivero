import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  static async getInitialProps({ req }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, isAuthenticated }
  }
  render() {
    const { children } = this.props
    const title = 'Welcome to Nextjs'
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css"
            // href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            // href="https://unpkg.com/tachyons@4/css/tachyons.min.css"
            // href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            // integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <script src="https://js.stripe.com/v3" />
        </Head>
        <header>
          <div className="green">Header-Nav component</div>
        </header>
        {children}
      </div>
    )
  }
}

export default Layout

// // <Nav className="navbar navbar-dark bg-dark">
// //   <NavItem>
// //     <Link href="/">
// //       <a className="navbar-brand">Home</a>
// //     </Link>
// //   </NavItem>

// //   <NavItem className="ml-auto">
// //     <Link href="/signin">
// //       <a className="nav-link">Sign In</a>
// //     </Link>
// //   </NavItem>

// //   <NavItem>
// //     <Link href="/signup">
// //       <a className="nav-link"> Sign Up</a>
// //     </Link>
// //   </NavItem>
// // </Nav>
