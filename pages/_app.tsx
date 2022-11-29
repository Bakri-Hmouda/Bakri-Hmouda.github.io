import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";


function check_if_in_Development() {
    const env = process.env.NODE_ENV
    if (env == "development") {
        return true
    }
    else if (env == "production") {
        return false
    }
}

export default function App({ Component, pageProps }: AppProps) {

    //   display build message in production
    if (!check_if_in_Development()) { return <h1>website is being built!</h1> }

    // return rest of pages in development
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}