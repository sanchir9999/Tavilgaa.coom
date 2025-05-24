
import { Container, Navbar, Footer, } from "./components/Container";

export default function Home() {
  return (
    <>
      <div className=" h-full m-auto flex flex-col justify-center items-center bg-[#d5dede]">
        <Container />
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
