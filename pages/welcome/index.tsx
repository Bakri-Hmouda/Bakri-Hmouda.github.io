import Head from "next/head";
import Link from "next/link";

export default function Welcome() {

    return (
        <>
            <Head>
                <title>Welcome | Bakri Hmouda</title>
            </Head>

            <main className="container max-w-lg min-h-screen flex justify-center items-center max-sm:max-w-[90%]">
                <div>

                    <h1 className="text-5xl text-center max-sm:text-2xl">BAKRI HMOUDA</h1>
                    <p className="text-center text-gray-400 max-sm:text-sm">
                        Lebanese full-stack web developer, photographer, and photo editor
                    </p>

                    <div className="flex max-sm:flex-col min-w-full min-h-fit mt-5 gap-4 justify-between ">
                        <Link className="bg-primary/75 hover:bg-primary/50
                         flex-1 transition-colors p-3 rounded text-center" href="#">
                            HOME
                        </Link>

                        <Link className="border-2  flex-1 border-primary/75 hover:bg-primary/20
                         transition-colors p-3 rounded text-center" href="#">
                            DOWNLOAD CV
                        </Link>
                    </div>

                </div>
            </main>
        </>
    )

}