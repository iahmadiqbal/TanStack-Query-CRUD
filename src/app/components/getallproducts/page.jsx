"use client";
import { useFetchAllProducts } from "@/hooks/useProducts";

const GetAllProducts = () => {
  const { data, isLoading, isError } = useFetchAllProducts();

  if (isLoading)
    return <h1 className="text-xl font-bold">Data is Loading...</h1>;
  if (isError)
    return (
      <h1 className="text-xl font-bold text-red-500">
        Something went Wrong...
      </h1>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Get All Products</h1>

      <ol className="list-decimal space-y-4">
        {data?.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow-md">
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>ID:</strong> {item.id}
              </li>
              <li>
                <strong>Title:</strong> {item.title}
              </li>
              <li>
                <strong>Description:</strong> {item.description}
              </li>
              <li>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GetAllProducts;
