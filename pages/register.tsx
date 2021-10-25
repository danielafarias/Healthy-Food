import styles from "../styles/Register.module.scss";
import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/register/header";
import Formulary from "../components/register/form";

export default function Register() {
  return (
    <div>
      <Head>
        <title>Healthy Food | Register</title>
        <meta
          name="description"
          content="Healthy Food Commerce Register Page"
        />
        <link rel="icon" href="/images/icon2.svg" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Formulary />
      </main>

      <Footer />
    </div>
  );
}
