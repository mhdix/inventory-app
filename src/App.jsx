import { useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {

  const [categories, setCategories] = useState([]);
  
  
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories}/>
        </div>
        <div className="container max-w-screen-sm mx-auto p-4">
          <Product categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
