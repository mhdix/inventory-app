import React, { useState } from "react";

const Category = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);

  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    desc: "",
  }); 

  const changeHandler = ({ target }) => {
    const { value, name } = target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories((prevState) => [
      ...prevState,
      { ...categoryFormData, createdAt: new Date().toISOString(), id: new Date().getTime() },
    ]);

    setCategoryFormData({ title: "", desc: "" });
  };

  return (
    <section>
      <div className={`mb-6 ${!isShow && "hidden"}`} id="category-wrapper">
        <div className="bg-slate-700 rounded-xl p-5 px-8">
          <h1 className="text-slate-200 font-bold">Add New Category</h1>
          <form action="" className="flex flex-col gap-6">
            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                title
              </label>
              <input
                type="text"
                name="title"
                className="bg-transparent border border-slate-500 rounded-xl w-3/6"
                value={categoryFormData.title}
                onChange={changeHandler}
              />
            </span>
            <span className="flex flex-col gap-2">
              <label htmlFor="" className="text-slate-400">
                description
              </label>
              <textarea
                name="desc"
                id=""
                rows="5"
                className="bg-transparent border border-slate-500 rounded-xl"
                value={categoryFormData.desc}
                onChange={changeHandler}
              ></textarea>
            </span>
            <span className="flex w-full gap-4">
              <button
                className="border text-slate-200 border-slate-200 p-2 rounded-xl w-1/2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsShow((prevState) => !prevState);
                }}
              >
                Cancle
              </button>
              <button
                className="border text-white bg-slate-500 border-slate-500 p-2 rounded-xl w-1/2"
                onClick={addNewCategoryHandler}
              >
                Add Category
              </button>
            </span>
          </form>
        </div>
      </div>
      {!isShow && (
        <button
          id="toggle-id-category"
          className="text-slate-600 text-lg mb-4 font-medium"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {!isShow ? "⬇️ add new category ?" : "⬆️ hidden add category ?"}
        </button>
      )}
    </section>
  );
};

export default Category;
