import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { NextPageWithLayout } from "./_app";

const Following: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Following | Zenn</title>
      </Head>
      <div>
        <h1>This is following page</h1>
      </div>
    </>
  );
};

Following.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
export default Following;
