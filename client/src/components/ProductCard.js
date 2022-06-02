

const ProductCard = ({ product }) => {
    return (
        <>
            <div className="mx-5 py-8 rounded-lg bg-white">
                <img src="https://images.unsplash.com/photo-1654094419663-202ce97c3085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt=""
                    className="object-cover text-center rounded-lg hover:opacity-75 cursor-pointer"/>
                <h3 className="text-lg font-medium mt-4 text-gray-900">PCX</h3>
                <div className="text-sm leading-loose text-[#9191B4] font-normal">
                    200.000 VNĐ
                </div>
            </div>
        </>
    )
}

export default ProductCard