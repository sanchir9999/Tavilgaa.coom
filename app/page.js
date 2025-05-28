import { Container } from "./components/Container";  // Footer тусдаа байвал эндээс авалгүй өөрөөр import хийх
import { Footer } from "./components/Footer";        // Footer тусдаа файлд байвал энэ замаар
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-full m-auto flex flex-col justify-between bg-[#d5dede] min-h-screen">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}
