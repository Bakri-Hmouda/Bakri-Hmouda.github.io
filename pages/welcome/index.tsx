import Head from "next/head";
import Button from "../../Components/button with icon/button";
import styles from "../../styles/Welcome.module.css"

export default function Welcome() {

    return (
        <>
            <Head>
                <title>Welcome | Bakri Hmouda</title>
            </Head>

            <main>
                <div className={styles.container}>
                    <h1>Welcome to my website</h1>
                    <Button text="visit portfolio" icon="" link="/" />
                    <Button text="download cv" icon="" link="/cv" />
                </div>
            </main>
        </>
    )

}