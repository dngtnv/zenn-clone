import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { NextPageWithLayout } from "./_app";

const Explore: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Explore | Zenn</title>
      </Head>
      <div>
        <h1>This is explore</h1>
      </div>
    </>
  );
};

Explore.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
export default Explore;
