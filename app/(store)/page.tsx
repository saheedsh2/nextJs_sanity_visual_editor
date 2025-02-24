import Image from "next/image";
import { Button } from "@/components/ui/button"
import {getAllProducts} from "@/sanity/lib/products/getAllProducts"
import ProductsView from "@/components/ui/ProductsView";

export default async function Home() {
  const products = await getAllProducts();
  // const categories = await getAllCategories();

  return (
    <div>
      <h2>Hello 123</h2>
      <ProductsView products={products} />
    </div>
  );
}
