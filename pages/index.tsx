import Bio from "../components/home/bio";
import Education from "../components/home/education";
import Experience from "../components/home/experience";
import Projects from "../components/home/projects";
import Layout from "../components/layout";

export default function Home() {
    return (
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
            <section>
                Contact
            </section>
        </Layout>
    )
}