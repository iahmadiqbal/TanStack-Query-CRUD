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
