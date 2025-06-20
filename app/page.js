import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import MouseFollower from "./components/MouseFollower";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <div className="h-full m-auto flex flex-col justify-between bg-[#d5dede] min-h-screen">
      <Navbar />
      <Container />
      <Footer />
      <MouseFollower />
    </div>
  );
}
