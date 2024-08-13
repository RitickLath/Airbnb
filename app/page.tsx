import Navbar from "@/app/Component/Navbar";
import Searchbar from "./Component/Searchbar";
import Banner from "./Component/Banner";
import Feature from "./Component/Feature";
import Display from "./Component/Display";
import FAQs from "./Component/FAQs";
import Categories from "./Component/Categories";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <Banner />
      <Feature />
      <Display />
      <Categories />
      <FAQs />
    </div>
  );
}
