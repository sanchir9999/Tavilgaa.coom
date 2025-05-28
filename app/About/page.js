"use client";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import About from "./About";

export default function Home() {
    return (
        <>
            <Navbar />
            <About />
            <Footer />
        </>
    );
}
