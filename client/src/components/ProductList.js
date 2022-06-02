import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
    return (
        <>
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                    Products
                </h2>
                <div class="mx-auto grid grid-cols-4 gap-x-5 p-5">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default ProductList