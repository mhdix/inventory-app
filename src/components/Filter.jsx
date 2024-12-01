import React from "react";

const Filter = () => {
  return (
    <div className="mb-10">
      <h2 className="text-slate-200 font-bold uppercase mb-4">Search & Sort</h2>
      <div className="flex gap-20">
        <div className="w-1/2">
          <h2 className="text-slate-200 uppercase text-xs mb-2 ml-2">Search</h2>
          <input type="text" className="rounded-lg bg-transparent w-full" />
        </div>
        <div className="w-1/2">
          <h2 className="text-slate-200 uppercase text-xs mb-2 ml-2">Sort</h2>
          <select name="" id="" className="bg-transparent w-full text-slate-300 rounded-lg">
            <option value="">latest</option>
            <option value="">earliest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
