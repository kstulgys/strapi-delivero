import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NavItem } from "../Button";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isAuthenticated };
  }
  render() {
    const { children } = this.props;
    const title = "Welcome to Nextjs";
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
            href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
          />
          <script src="https://js.stripe.com/v3" />
        </Head>
        <header>
          <div className="flex justify-center">
            <Link href="/">
              <NavItem>Home</NavItem>
            </Link>
            <Link href="/signin">
              <NavItem>Sign In</NavItem>
            </Link>
            <Link href="/signup">
              <NavItem>Sign Up</NavItem>
            </Link>
          </div>
        </header>
        {children}
      </div>
    );
  }
}

export default Layout;

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
