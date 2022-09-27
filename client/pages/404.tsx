import Link from "next/link"
import { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const NotFound: NextPageWithLayout = () => {
    return (
        <div>
            <h1 className="text-primary text-2xl">This page could not be found</h1>
            <Link href="/"><a>Go back</a></Link>
        </div>
    )
}

NotFound.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default NotFound;
