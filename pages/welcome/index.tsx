import Head from "next/head";
import Button from "../../components/button with icon/button";

export default function Welcome() {

    return (
        <>
            <Head>
                <title>Welcome | Bakri Hmouda</title>
            </Head>

            <main>
                <div className="container">
                    <h1 className="text-5xl">Bakri Hmouda</h1>
                    <Button text="visit portfolio" icon="" link="/" />
                    <Button text="download cv" icon="" link="/cv" />
                </div>
            </main>
        </>
    )

}