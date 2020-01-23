import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

import Layout from "../components/admin_layout";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import SideBarContent from "../components/sidebarcontent";
import SideBarWrapper from "../components/sidebarwrapper";
const Dashboard = () => (
  <div>
    <Head>
      <title>Dashboard page</title>
      <link href="/static/sidebarstyles.css" rel="stylesheet" />
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
          <h5>This is Dashboard page</h5>
          <p>
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis sem nibh id elit. Duis sed odio siton amet nibh
            vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
            nec tellus a odio tincidunt auctor a ornare odio. Sed a mauris vitae
            erata consequat auctor eu in elit. Class aptent taciti socosqu ad
            litora torquent per conubia. Proin viverra elit non ipsum venenatis,
            eget pellentesque mi auctor. In pretium mi non velit tincidunt
            aliquam. Nam elementu nulla accumsan cursus varius. Vestibulum
            faucibus urna leo, commodo tellus sodales eu. DuCis a torCtor nec
            eros ullamcorper tempus. Nulla facilisi. Vivamus posuere cursus
            nisl, id molestie tellus ullamcorper eu. Donec mauris erat ultrices
            ac ligula ornare, imperdiet consequat tellus. Praesent vitae leo
            necmetus pretium euismod non ac nulla. Proin id bibendum mauris,
            quis egestas ligula. Nullam id porttitor dolor, sed tincidunt diam.
            Pellentesque vel dui rutrum, tempus dui porttitor, scelerisque dolor
            et pharetra.
          </p>
        </SideBarContent>
      </SideBarWrapper>
    </Layout>
  </div>
);

export default Dashboard;
