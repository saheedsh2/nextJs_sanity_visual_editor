import { Product } from "@/sanity.types";


function ProductGrid({ products }: {products: Product[]}){
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        ProductGrid
    </div>
}

export default ProductGrid;