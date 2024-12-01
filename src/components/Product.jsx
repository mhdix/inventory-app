import React, { useState } from "react";

const Product = ({ categories }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className={`mb-6 ${!isShow && "hidden"}`}>
        <div className="bg-slate-700 rounded-xl p-5 px-8">
          <h1 className="text-slate-200 font-bold">Add New product</h1>
          <form action="" className="flex flex-col gap-6">
            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                title
              </label>
              <input
                type="text"
                name="title"
                className="bg-transparent border border-slate-500 rounded-xl w-3/6"
              />
            </span>
            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                quantity
              </label>
              <input
                type="text"
                name="title"
                className="bg-transparent border border-slate-500 rounded-xl w-3/6"
              />
            </span>

            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                category
              </label>
              <select
                name=""
                id=""
                className="bg-transparent border text-slate-300 border-slate-500 rounded-xl"
              >
                <option
                  disabled
                  selected
                  className="bg-slate-500 text-slate-300"
                >
                  select a category
                </option>
                {categories.map((category) => (
                  <option
                    key={category.id}
                    className="bg-slate-500 text-slate-300"
                    value={category.title}
                  >
                    {category.title}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex w-full gap-4">
              <button className="border text-slate-200 border-slate-200 p-2 rounded-xl w-1/2">
                Cancle
              </button>
              <button className="border text-white bg-slate-500 border-slate-500 p-2 rounded-xl w-1/2">
                Add Category
              </button>
            </span>
          </form>
        </div>
      </div>
      {!isShow && (
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className="text-slate-600 text-lg mb-4 font-medium"
        >
          {!isShow ? "⬇️ add new product ?" : "⬆️ hidden add product ?"}
        </button>
      )}
    </div>
  );
};

export default Product;
