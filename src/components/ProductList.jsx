import React from "react";

const ProductList = ({ products, categories, setProducts }) => {
  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };
  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== parseInt(productId)
    );
    setProducts(filteredProducts);
  };
  return (
    <div>
      <h2 className="text-slate-200 font-bold uppercase">ProductList</h2>
      <div className="flex flex-col justify-center gap-2 mt-4">
        { products.map((product) => {
          return (
            <div
              key={product.id}
              className="grid grid-cols-12 border border-white rounded-xl relative p-4 gap-3"
            >
              <div className="col-span-5 text-slate-300">
                <p className="ml-4">{product.title}</p>
              </div>
              <div className="text-sm col-span-7 text-slate-300 flex items-center gap-4 justify-end">
                <p className="border border-slate-500 rounded-full px-4 py-1 bg-slate-700">
                  {findCategory(product.categoryId)}
                </p>
                <p className="border rounded-full w-7 h-7 flex justify-center items-center overflow-hidden">
                  {product.quantity}
                </p>
                <button
                  className="p-1 text-slate-100 rounded-md border border-red-800 bg-opacity-20 bg-red-500"
                  onClick={() => deleteProduct(product.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default ProductList;
