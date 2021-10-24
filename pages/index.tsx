import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Introduction from "../components/home/introduction";
import Recipes from "../components/home/recipes";
import Services from "../components/home/services";
import Blog from "../components/home/blog";
import Membership from "../components/home/membership";
import Footer from "../components/footer";
const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Healthy Food | Home</title>
        <meta name="description" content="Healthy Food Commerce Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Introduction/>
        <Recipes/>
        <Services/>
        <Blog/>
        <Membership/>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
