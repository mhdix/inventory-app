import React, { useState } from "react";

const Product = ({ categories, products, setProducts }) => {
  const [isShow, setIsShow] = useState(false);
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...productsFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setProductsFormData({ title: "", quantity: "", categoryId: "" });
  };
  return (
    <div>
      <div className={`mb-6 ${!isShow && "hidden"}`}>
        <h2 className="text-slate-200 font-bold uppercase m-4">Add New product</h2>

        <div className="bg-slate-700 rounded-xl p-5 px-8">
          <form action="" className="flex flex-col gap-6">
            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                title
              </label>
              <input
                type="text"
                name="title"
                className="bg-transparent border text-slate-300 border-slate-500 rounded-xl w-3/6"
                value={productsFormData.title}
                onChange={(e) => changeHandler(e)}
              />
            </span>
            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="bg-transparent border text-slate-300 border-slate-500 rounded-xl w-3/6"
                value={productsFormData.quantity}
                onChange={(e) => changeHandler(e)}
              />
            </span>

            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                category
              </label>
              <select
                value={productsFormData.categoryId}
                onChange={(e) => changeHandler(e)}
                name="categoryId"
                className="bg-transparent border text-slate-300 border-slate-500 rounded-xl"
              >
                <option value="" className="bg-slate-500 text-slate-300">
                  select a category
                </option>
                {categories.map((category) => (
                  <option
                    key={category.id}
                    className="bg-slate-500 text-slate-300"
                    value={category.id}
                  >
                    {category.title} - {category.id}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex w-full gap-4">
              <button
                onClick={addNewProduct}
                className="border text-white bg-slate-500 border-slate-500 p-2 rounded-xl w-full"
              >
                Add New Product
              </button>
            </span>
          </form>
        </div>
      </div>
      {/* {!isShow && ( */}
      <button
        onClick={() => setIsShow((prevState) => !prevState)}
        className="text-slate-600 text-lg mb-4 font-medium"
      >
        {!isShow ? "⬇️ add new product ?" : "⬆️ hidden add product ?"}
      </button>
      {/* )}   */}
    </div>
  );
};

export default Product;
