import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/admin_layout";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import SideBarContent from "../components/sidebarcontent";
import SideBarWrapper from "../components/sidebarwrapper";
const Index = () => (
  <div>
    <Head>
      <title>My styled page</title>
      <link href="/static/sidebarstyles.css" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
      ></link>
    </Head>
    <Layout>
      <NavBar></NavBar>

      <SideBarWrapper>
        <SideBar></SideBar>
        <SideBarContent>
          <h1>This is Index Page</h1>
        </SideBarContent>
      </SideBarWrapper>
    </Layout>
  </div>
);

export default Index;
