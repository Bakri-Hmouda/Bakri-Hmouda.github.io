import React from "react";
import Header from "./header";
import Footer from "./home/footer";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="container max-sm:max-w-[90%]">
                {children}
            </main>
            <Footer />
        </>
    )
}