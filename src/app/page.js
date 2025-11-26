import DeleteProduct from "./components/deleteproduct/page";
import GetAllProducts from "./components/getallproducts/page";
import GetSingleProduct from "./components/getsingleproduct/page";
import UpdateProduct from "./components/updateproduct/page";

export default function Home() {
  return (
    <>
      {/* <GetAllProducts /> */}
      {/* <GetSingleProduct id={3} /> */}
      {/* <UpdateProduct /> */}
      <DeleteProduct id={2} />
    </>
  );
}
