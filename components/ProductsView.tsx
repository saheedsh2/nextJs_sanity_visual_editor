import { Category, Product } from "@/sanity.types";

interface ProductsViewProps {
    products: Product[];
    categories: Category[];
}


const ProductsView = ({products}: ProductsViewProps) => {
    return <div className="flex flex-col">
        ProductsView



<div className="flex flex-col">

    <div className="w-full sm:w-[200px]">



    </div>
        <div>

            {/* <ProductGrid products={products} /> */}

        </div>
    </div>


    </div>
};

export default ProductsView;