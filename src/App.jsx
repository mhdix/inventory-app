import { useEffect, useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProduct] = useState([]);

  const [sort, setSort] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) =>
      p.title.trim().toLowerCase().includes(searchValue)
    );
  };

  const sortDate = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilterProduct(result);
  }, [sort, searchValue, products]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    console.log(savedCategories, savedProducts);
    setProducts( savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if(products.length)
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if(categories.length)
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);


  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories} />
        </div>
        <div className="container max-w-screen-sm mx-auto p-4">
          <Product
            categories={categories}
            products={products}
            setProducts={setProducts}
          />
          <Filter
            sort={sort}
            searchValue={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
