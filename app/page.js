import Container from "./components/Container";
import DiscountPopup from "./components/DiscountPopup";




export default function Home() {
  return (
    <div className="h-full m-auto flex flex-col justify-between bg-[#d5dede] min-h-screen">

      <Container />
      <DiscountPopup />

    </div>
  );
}
