import Bio from "../components/home/bio";
import Experience from "../components/home/experience";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <section className="my-5">
                <Bio />
            </section>

            <section className="bg-wave">
                <Experience />
            </section>
            <section>
                <h1>
                    Projects
                </h1>
            </section>
            <section>
                Contact
            </section>
        </Layout>
    )
}