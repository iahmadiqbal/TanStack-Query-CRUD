import GetAllProducts from "./components/getallproducts/page";
import GetSingleProduct from "./components/getsingleproduct/page";

export default function Home() {
  return (
    <>
      {/* <GetAllProducts /> */}
      <GetSingleProduct id={3} />
    </>
  );
}
