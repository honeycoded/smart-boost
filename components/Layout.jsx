import React from "react";
import Head from 'next/head'
import Navbar from './Navbar'
import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
const Layout = ({children}) => {
  const { pathname } = useRouter();
  return (
    <div>
    <Head>
      <title>Smart Boost</title>
    </Head>
    <header>
      {
        pathname === '/DashboardLogin' || pathname === '/Dashboard'|| pathname === '/Dashboard/Links' || pathname === '/Dashboard/Reviews' ? <DashboardNavbar />:(<Navbar />)
      }
    </header>
    <main>
      {children}
    </main>
      {
        pathname === '/DashboardLogin' || pathname === '/Dashboard' || pathname === '/Dashboard/Links' || pathname === '/Dashboard/Reviews' ? '' :(
          <Footer />
        )
      }
  </div>
  )
};

export default Layout;
