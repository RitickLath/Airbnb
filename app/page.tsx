import Navbar from "@/app/Component/Navbar";
import Searchbar from "./Component/Searchbar";
import Banner from "./Component/Banner";
import Feature from "./Component/Feature";
import Display from "./Component/Display";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <Banner />
      <Feature />
      <Display />
    </div>
  );
}
