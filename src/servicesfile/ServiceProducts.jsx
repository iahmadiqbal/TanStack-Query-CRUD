import { BASE_URL } from "@/lib/api";

// Fetch all products data
export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch the products");
    }

    const data = await response.json();
    console.log("All products Data", data);
    return data;
  } catch (error) {
    console.log("Something went wrong:", error);
    throw error;
  }
};

// Fetch to get Single product
export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (response.ok) {
      console.log("Failed to fetch single product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("something went wrong", error);
  }
};
