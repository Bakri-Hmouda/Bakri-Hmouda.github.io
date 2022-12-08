import Head from "next/head";
import Bio from "../components/home/bio";
import Education from "../components/home/education";
import Experience from "../components/home/experience";
import Projects from "../components/home/projects";
import Layout from "../components/layout";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Bakri Hmouda</title>
                <meta
                    name="description"
                    content="full-stack web developer with graphic design skills, I have a strong background in both front-end and back-end web development as well as design. I have experience working with a range of technologies, including JavaScript, HTML, CSS,PHP, and wordpress."
                />
                <meta
                    name="og:title"
                    content="Bakri Hmouda | full-stack web developer"
                />
                <meta
                    name="og:description"
                    content="full-stack web developer with graphic design skills, I have a strong background in both front-end and back-end web development as well as design. I have experience working with a range of technologies, including JavaScript, HTML, CSS,PHP, and wordpress."
                />

            </Head>
            <Layout>
                <section className="py-4">
                    <Bio />
                </section>

                <section className="py-4">
                    <Experience />
                </section>
                <section className="py-4">
                    <Projects />
                </section>

                <section className="py-4">
                    <Education />
                </section>

            </Layout>
        </>
    )
}