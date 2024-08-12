
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <div className=" h-full m-auto flex flex-col justify-center items-center bg-[#d5dede]">
        <Navbar />
        <Container />
        <Footer />
      </div>
    </>
  );
}
